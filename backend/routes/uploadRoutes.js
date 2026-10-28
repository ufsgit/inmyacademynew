const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadToR2 } = require('../config/r2');
const db = require('../config/db');

// Memory storage keeps uploaded files in RAM buffer for direct streaming to Cloudflare R2
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 250 * 1024 * 1024 // 250MB limit
    }
});

// Helper to extract file whether uploaded as 'file', 'image', or any field name
const getUploadedFile = (req) => {
    if (req.file) return req.file;
    if (req.files) {
        if (Array.isArray(req.files) && req.files.length > 0) return req.files[0];
        if (req.files['file'] && req.files['file'][0]) return req.files['file'][0];
        if (req.files['image'] && req.files['image'][0]) return req.files['image'][0];
    }
    return null;
};

// General media upload (course images, topic videos, lesson media)
router.post('/', upload.any(), async (req, res) => {
    try {
        const file = getUploadedFile(req);
        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const result = await uploadToR2({
            fileBuffer: file.buffer,
            originalName: file.originalname,
            mimeType: file.mimetype,
            folder: 'media'
        });

        res.json({
            url: result.url,
            fileName: result.fileName,
            originalName: result.originalName
        });
    } catch (error) {
        console.error('Error uploading file to Cloudflare R2:', error);
        res.status(500).json({ error: 'Failed to upload file: ' + error.message });
    }
});

// Student project submissions (module assignments)
router.post('/project', upload.any(), async (req, res) => {
    try {
        const file = getUploadedFile(req);
        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const { userId, userName, userEmail, courseTitle, moduleName } = req.body;

        const result = await uploadToR2({
            fileBuffer: file.buffer,
            originalName: file.originalname,
            mimeType: file.mimetype,
            folder: 'projects'
        });

        const createProjectTable = `
            CREATE TABLE IF NOT EXISTS module_projects (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT NOT NULL,
                user_name VARCHAR(255),
                user_email VARCHAR(255),
                course_title VARCHAR(255),
                module_name VARCHAR(255),
                file_name VARCHAR(255),
                file_path VARCHAR(500),
                submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        await db.query(createProjectTable);

        await db.query(
            `INSERT INTO module_projects (user_id, user_name, user_email, course_title, module_name, file_name, file_path) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [Number(userId) || 0, userName || '', userEmail || '', courseTitle || '', moduleName || '', result.originalName, result.url]
        );

        res.json({
            message: 'Project uploaded successfully',
            url: result.url,
            fileName: result.originalName
        });
    } catch (error) {
        console.error('Error uploading project to Cloudflare R2:', error);
        res.status(500).json({ error: 'Failed to upload project: ' + error.message });
    }
});

// Admin documents and resources upload
router.post('/document', upload.any(), async (req, res) => {
    try {
        const file = getUploadedFile(req);
        if (!file) {
            return res.status(400).json({ error: 'No document file uploaded' });
        }

        const { category, courseTitle, moduleName, title } = req.body;

        const result = await uploadToR2({
            fileBuffer: file.buffer,
            originalName: file.originalname,
            mimeType: file.mimetype,
            folder: 'documents'
        });

        const createAdminDocsTable = `
            CREATE TABLE IF NOT EXISTS admin_documents (
                id INT AUTO_INCREMENT PRIMARY KEY,
                category VARCHAR(100) NOT NULL,
                course_title VARCHAR(255) NULL,
                module_name VARCHAR(255) NULL,
                title VARCHAR(255) NOT NULL,
                file_name VARCHAR(255) NOT NULL,
                file_path VARCHAR(500) NOT NULL,
                uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        await db.query(createAdminDocsTable);

        await db.query(
            `INSERT INTO admin_documents (category, course_title, module_name, title, file_name, file_path) VALUES (?, ?, ?, ?, ?, ?)`,
            [
                category || 'Open Challenges',
                courseTitle || null,
                moduleName || null,
                title || result.originalName,
                result.originalName,
                result.url
            ]
        );

        res.json({
            message: 'Document uploaded successfully',
            url: result.url,
            fileName: result.originalName
        });
    } catch (error) {
        console.error('Error uploading admin document to Cloudflare R2:', error);
        res.status(500).json({ error: 'Failed to upload document: ' + error.message });
    }
});

module.exports = router;
