const { S3Client, PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const s3Client = new S3Client({
    region: 'auto',
    endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
    }
});

/**
 * Uploads a file buffer directly to Cloudflare R2
 * @param {Object} params
 * @param {Buffer} params.fileBuffer - Raw file buffer from multer.memoryStorage
 * @param {string} params.originalName - Original file name
 * @param {string} params.mimeType - File content type (e.g., 'image/png', 'video/mp4')
 * @param {string} [params.folder] - Optional folder prefix (e.g., 'documents', 'projects', 'videos')
 * @returns {Promise<{ url: string, key: string, fileName: string, originalName: string }>}
 */
const uploadToR2 = async ({ fileBuffer, originalName, mimeType, folder = '' }) => {
    if (!fileBuffer) {
        throw new Error('No file buffer provided for R2 upload');
    }

    const sanitizedBaseName = (originalName || 'file')
        .replace(/\s+/g, '-')
        .replace(/[^a-zA-Z0-9.-]/g, '');
    const uniqueFileName = `${Date.now()}-${sanitizedBaseName}`;
    const cleanFolder = folder ? folder.replace(/^\/+|\/+$/g, '') : '';
    const key = cleanFolder ? `${cleanFolder}/${uniqueFileName}` : uniqueFileName;

    const command = new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: key,
        Body: fileBuffer,
        ContentType: mimeType || 'application/octet-stream'
    });

    await s3Client.send(command);

    const publicBaseUrl = (process.env.R2_PUBLIC_URL || '')
        .split('#')[0]
        .trim()
        .replace(/\/+$/, '');

    const url = `${publicBaseUrl}/${key}`;

    return {
        url,
        key,
        fileName: uniqueFileName,
        originalName: originalName || uniqueFileName
    };
};

/**
 * Deletes an object from Cloudflare R2
 * @param {string} keyOrUrl - Either the R2 storage key or full public URL
 */
const deleteFromR2 = async (keyOrUrl) => {
    if (!keyOrUrl) return;

    let key = keyOrUrl;
    const publicBaseUrl = (process.env.R2_PUBLIC_URL || '').split('#')[0].trim().replace(/\/+$/, '');
    if (publicBaseUrl && key.startsWith(publicBaseUrl)) {
        key = key.replace(`${publicBaseUrl}/`, '');
    }

    const command = new DeleteObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: key
    });

    await s3Client.send(command);
};

module.exports = {
    s3Client,
    uploadToR2,
    deleteFromR2
};
