const db = require('../config/db');

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        // Check if user is an admin (in users table)
        const [users] = await db.query('SELECT * FROM users WHERE username = ? AND password = ? LIMIT 1', [username, password]);
        if (users.length > 0) {
            const user = users[0];
            return res.status(200).json({
                message: 'Login successful',
                role: user.role, // 'superadmin' or 'admin'
                user: { id: user.id, username: user.username }
            });
        }

        // Check if user is a participant (in registrations table)
        // Note: Participants log in with email
        const [registrations] = await db.query('SELECT * FROM registrations WHERE email = ? AND password = ? LIMIT 1', [username, password]);
        if (registrations.length > 0) {
            const participant = registrations[0];
            
            let dashboardType = 'open';
            if (participant.challenge_name && participant.challenge_name.includes('Mastery')) {
                dashboardType = 'mastery';
            } else if (participant.challenge_name && participant.challenge_name.includes('School')) {
                dashboardType = 'school';
            }
            
            return res.status(200).json({
                message: 'Login successful',
                role: 'participant',
                dashboardType: dashboardType,
                user: { 
                    id: participant.id, 
                    fullName: participant.full_name,
                    challengeName: participant.challenge_name 
                }
            });
        }

        // If not found in either table
        res.status(401).json({ message: 'Invalid username/email or password' });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { login };
