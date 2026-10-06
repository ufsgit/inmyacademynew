require('dotenv').config();
const mysql = require('mysql2/promise');

const dummyData = [
  // School Competitions - Online Phase
  ['SCHOOL', 'Online Phase', 'All', 'Westminster School', 'United Kingdom', 3, 2850, 'Champion'],
  ['SCHOOL', 'Online Phase', 'All', 'Harrow School', 'United Kingdom', 3, 2720, 'Runner-Up'],
  ['SCHOOL', 'Online Phase', 'All', 'Eton College', 'United Kingdom', 3, 2680, '3rd Place'],
  ['SCHOOL', 'Online Phase', 'All', "St. Paul's School", 'United Kingdom', 3, 2540, 'Finalist'],
  ['SCHOOL', 'Online Phase', 'All', 'Dulwich College', 'United Kingdom', 3, 2310, null],
  ['SCHOOL', 'Online Phase', 'All', 'Oundle School', 'United Kingdom', 3, 2180, null],

  // Mastery Battles - Online Shortlisting - Diplomatic Policy Leadership
  ['MASTERY', 'Online Shortlisting', 'Diplomatic Policy Leadership', 'Emma Chen', 'Singapore', null, 95, 'Champion'],
  ['MASTERY', 'Online Shortlisting', 'Diplomatic Policy Leadership', "Liam O'Brien", 'Ireland', null, 92, 'Runner-Up'],
  ['MASTERY', 'Online Shortlisting', 'Diplomatic Policy Leadership', 'Sophie Laurent', 'France', null, 89, '3rd Place'],
  ['MASTERY', 'Online Shortlisting', 'Diplomatic Policy Leadership', 'Marcus Johnson', 'United States', null, 87, 'Finalist'],
  ['MASTERY', 'Online Shortlisting', 'Diplomatic Policy Leadership', 'Yuki Tanaka', 'Japan', null, 85, null],
  ['MASTERY', 'Online Shortlisting', 'Diplomatic Policy Leadership', 'Isabella Romano', 'Italy', null, 83, null],
  ['MASTERY', 'Online Shortlisting', 'Diplomatic Policy Leadership', 'Ahmed Hassan', 'Egypt', null, 81, null],

  // Open Challenges - Teen Entrepreneur Challenge
  ['OPEN', null, 'Teen Entrepreneur Challenge', 'Alex Rivera', 'Mexico', null, 98, 'Champion'],
  ['OPEN', null, 'Teen Entrepreneur Challenge', 'Zara Khan', 'Pakistan', null, 96, 'Runner-Up'],
  ['OPEN', null, 'Teen Entrepreneur Challenge', 'Lucas Oliveira', 'Brazil', null, 94, '3rd Place'],
  ['OPEN', null, 'Teen Entrepreneur Challenge', 'Amara Okonkwo', 'Nigeria', null, 92, null],
  ['OPEN', null, 'Teen Entrepreneur Challenge', 'Sofia Gonzalez', 'Spain', null, 90, null],
  ['OPEN', null, 'Teen Entrepreneur Challenge', 'Kai Chen', 'Taiwan', null, 88, null],
  ['OPEN', null, 'Teen Entrepreneur Challenge', 'Elena Rossi', 'Italy', null, 86, null],
  ['OPEN', null, 'Teen Entrepreneur Challenge', 'Hassan Ibrahim', 'Saudi Arabia', null, 84, null],
  ['OPEN', null, 'Teen Entrepreneur Challenge', 'Lexi Thompson', 'Australia', null, 82, null],
  ['OPEN', null, 'Teen Entrepreneur Challenge', 'Maya Patel', 'Canada', null, 80, null]
];

async function setupLeaderboard() {
  let connection;
  try {
    console.log("Connecting to the database...");
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT
    });

    console.log("Creating leaderboard table...");
    await connection.query(`
      CREATE TABLE IF NOT EXISTS leaderboard (
          Id INT AUTO_INCREMENT PRIMARY KEY,
          CompetitionFormat VARCHAR(20) NOT null, 
          CompetitionPhase VARCHAR(50), 
          CategoryTrack VARCHAR(100), 
          ParticipantName VARCHAR(150) NOT null,
          Country VARCHAR(100) NOT null,
          TeamsCount INT DEFAULT null,
          Score INT NOT null,
          Award VARCHAR(50) DEFAULT null,
          CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    console.log("Emptying leaderboard table...");
    await connection.query('TRUNCATE TABLE leaderboard');

    console.log("Inserting dummy data...");
    const insertQuery = `
      INSERT INTO leaderboard 
      (CompetitionFormat, CompetitionPhase, CategoryTrack, ParticipantName, Country, TeamsCount, Score, Award) 
      VALUES ?
    `;
    await connection.query(insertQuery, [dummyData]);

    console.log("Leaderboard setup complete! Seeded", dummyData.length, "rows.");
  } catch (error) {
    console.error("Error setting up leaderboard:", error);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

setupLeaderboard();
