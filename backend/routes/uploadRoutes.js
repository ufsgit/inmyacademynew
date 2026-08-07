const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '-'));
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        
        const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
        res.json({ url: fileUrl });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ error: 'Failed to upload file' });
    }
});

router.post('/project', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        
        const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
        const { userId, userName, userEmail, courseTitle, moduleName } = req.body;
        
        const db = require('../config/db');
        
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
            [Number(userId) || 0, userName || '', userEmail || '', courseTitle || '', moduleName || '', req.file.originalname, fileUrl]
        );

        res.json({ message: 'Project uploaded successfully', url: fileUrl, fileName: req.file.originalname });
    } catch (error) {
        console.error('Error uploading project:', error);
        res.status(500).json({ error: 'Failed to upload project: ' + error.message });
    }
});

router.post('/document', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No document file uploaded' });
        }
        
        const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
        const { category, courseTitle, moduleName, title } = req.body;
        
        const db = require('../config/db');
        
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
            [category || 'Open Challenges', courseTitle || null, moduleName || null, title || req.file.originalname, req.file.originalname, fileUrl]
        );

        res.json({ message: 'Document uploaded successfully', url: fileUrl, fileName: req.file.originalname });
    } catch (error) {
        console.error('Error uploading admin document:', error);
        res.status(500).json({ error: 'Failed to upload document: ' + error.message });
    }
});

module.exports = router;
