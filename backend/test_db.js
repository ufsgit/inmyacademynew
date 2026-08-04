const db = require('./config/db');

async function test() {
    try {
        const [regs] = await db.query('SELECT id, video_path, poster_path, summary FROM registrations WHERE video_path IS NOT NULL OR summary IS NOT NULL OR poster_path IS NOT NULL');
        
        for (let reg of regs) {
            const checkQuery = `SELECT id FROM submissions WHERE registration_id = ?`;
            const [existing] = await db.query(checkQuery, [reg.id]);
            
            if (existing.length === 0) {
                const insertQuery = `
                    INSERT INTO submissions (registration_id, video_path, poster_path, summary, status)
                    VALUES (?, ?, ?, ?, 'Submitted')
                `;
                await db.query(insertQuery, [reg.id, reg.video_path, reg.poster_path, reg.summary]);
                console.log(`Migrated registration ID ${reg.id} to submissions.`);
            }
        }
        console.log("Migration complete.");
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
test();
