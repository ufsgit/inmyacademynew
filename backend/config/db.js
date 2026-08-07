const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Ensure database schema migrations
(async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Successfully connected to the MySQL database.');
        
        const alterQueries = [
            `ALTER TABLE registrations ADD COLUMN parent_name VARCHAR(255) NULL`,
            `ALTER TABLE registrations ADD COLUMN parent_email VARCHAR(255) NULL`,
            `ALTER TABLE registrations ADD COLUMN parent_consent BOOLEAN DEFAULT FALSE`,
            `ALTER TABLE registrations ADD COLUMN teams_data TEXT NULL`
        ];
        
        for (const q of alterQueries) {
            try {
                await connection.query(q);
            } catch (e) {
                // Column already exists or error ignored
            }
        }

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
        await connection.query(createProjectTable);

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
        await connection.query(createAdminDocsTable);
        
        connection.release();
    } catch (err) {
        console.error('Error connecting to MySQL:', err.message);
    }
})();

module.exports = pool;
