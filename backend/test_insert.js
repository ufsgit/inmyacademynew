const db = require('./config/db');
async function testInsert() {
    try {
        const query = `
            INSERT INTO registrations 
            (full_name, age, country, city, email, password, parent_name, parent_email, parent_consent, challenge_name) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        
        await db.query(query, [
            'test', 
            0, 
            'india', 
            'kochi', 
            'test@test.com', 
            'school_default_password', 
            null, 
            null, 
            0,
            'Mastery Battle Teams'
        ]);
        console.log("Success");
        process.exit(0);
    } catch(e) {
        console.error(e.message);
        process.exit(1);
    }
}
testInsert();
