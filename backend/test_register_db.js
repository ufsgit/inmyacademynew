const db = require('./config/db');

async function testQuery() {
    try {
        const query = `
            INSERT INTO registrations 
            (full_name, age, country, city, email, password, parent_name, parent_email, parent_consent, challenge_name) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const params = [
            'Test User', 
            25, 
            'UK', 
            'London', 
            'test@example.com', 
            'password123', 
            null, 
            null, 
            0,
            'Test Challenge'
        ];
        console.log('Executing query...');
        const [result] = await db.query(query, params);
        console.log('Query succeeded:', result);
        process.exit(0);
    } catch (err) {
        console.error('Query failed:', err);
        process.exit(1);
    }
}

testQuery();
