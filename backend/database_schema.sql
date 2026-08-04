-- MySQL Workbench Schema setup
CREATE DATABASE IF NOT EXISTS skillstorm_db;
USE skillstorm_db;

CREATE TABLE IF NOT EXISTS challenges (
    id INT AUTO_INCREMENT PRIMARY KEY,
    challenge_name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS registrations;

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
);

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert dummy data
INSERT INTO challenges (challenge_name, description, category) 
VALUES ('Creative Storytelling Certificate', 'Write a creative story', 'Mastery Battles');

INSERT INTO users (username, password, role) 
VALUES ('superadmin', 'superadmin', 'superadmin');
