const mysql = require('mysql2/promise');
require('dotenv').config();

async function setup() {
    try {
        const pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        console.log("Creating challenges table if not exists...");
        await pool.query(`DROP TABLE IF EXISTS registrations`); // drop dependent first
        await pool.query(`DROP TABLE IF EXISTS challenges`);
        const createChallengesQuery = `
            CREATE TABLE IF NOT EXISTS challenges (
                id INT AUTO_INCREMENT PRIMARY KEY,
                challenge_name VARCHAR(255) NOT NULL,
                description TEXT,
                category VARCHAR(100),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `;
        await pool.query(createChallengesQuery);

        console.log("Creating registrations table if not exists...");
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS registrations (
                id INT AUTO_INCREMENT PRIMARY KEY,
                full_name VARCHAR(255) NOT NULL,
                age INT NOT NULL,
                country VARCHAR(100) NOT NULL,
                city VARCHAR(100) NOT NULL,
                email VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                parent_name VARCHAR(255),
                parent_email VARCHAR(255),
                parent_consent BOOLEAN DEFAULT FALSE,
                payment_amount DECIMAL(10, 2) DEFAULT 1.00,
                challenge_name VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        await pool.query(createTableQuery);

        console.log("Creating users table if not exists...");
        await pool.query(`DROP TABLE IF EXISTS users`);
        const createUsersQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(100) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                role VARCHAR(50) DEFAULT 'user',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        await pool.query(createUsersQuery);

        console.log("Inserting super admin user...");
        await pool.query(`INSERT INTO users (username, password, role) VALUES ('superadmin', 'superadmin', 'superadmin')`);

        console.log("Database schema updated successfully!");
        process.exit(0);
    } catch (err) {
        console.error("Error setting up DB: ", err);
        process.exit(1);
    }
}

setup();
