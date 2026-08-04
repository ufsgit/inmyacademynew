const db = require('./config/db');

async function testFullLogic() {
    try {
        const challengeName = 'Test Challenge';
        const category = 'Mastery Battles';
        let finalChallengeName = null;
        if (challengeName) {
            const [existingChallenge] = await db.query('SELECT challenge_name FROM challenges WHERE challenge_name = ? LIMIT 1', [challengeName]);
            if (existingChallenge.length > 0) {
                finalChallengeName = existingChallenge[0].challenge_name;
            } else {
                console.log('Inserting challenge...');
                await db.query('INSERT INTO challenges (challenge_name, category) VALUES (?, ?)', [challengeName, category || null]);
                finalChallengeName = challengeName;
            }
        }
        console.log('Logic succeeded');
        process.exit(0);
    } catch (err) {
        console.error('Logic failed:', err);
        process.exit(1);
    }
}

testFullLogic();
