const db = require('../config/db');

// @desc    Get all registrations
// @route   GET /api/admin/registrations
const getAllRegistrations = async (req, res) => {
    try {
        const query = `
            SELECT 
                r.*, 
                IF(r.age = 0, 'school', 'individual') AS registration_type,
                c.category, 
                COALESCE(s.video_path, r.video_path) AS video_path, 
                COALESCE(s.poster_path, r.poster_path) AS poster_path, 
                COALESCE(s.summary, r.summary) AS summary, 
                s.status as submission_status, 
                s.submitted_at
            FROM registrations r 
            LEFT JOIN challenges c ON r.challenge_name = c.challenge_name 
            LEFT JOIN submissions s ON r.id = s.registration_id
            ORDER BY r.created_at DESC
        `;
        const [rows] = await db.query(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching registrations:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get all users
// @route   GET /api/admin/users
const getAllUsers = async (req, res) => {
    try {
        const query = 'SELECT id, username, role, created_at FROM users ORDER BY created_at DESC';
        const [rows] = await db.query(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get dashboard stats
// @route   GET /api/admin/stats
const getDashboardStats = async (req, res) => {
    try {
        const [registrations] = await db.query('SELECT COUNT(*) as count FROM registrations');
        const [users] = await db.query('SELECT COUNT(*) as count FROM users');
        const [challenges] = await db.query('SELECT COUNT(*) as count FROM challenges');
        
        res.status(200).json({
            totalRegistrations: registrations[0].count,
            totalUsers: users[0].count,
            totalChallenges: challenges[0].count
        });
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Update a user's role or details
// @route   PUT /api/admin/users/:id
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { role } = req.body;
        
        if (!role) {
            return res.status(400).json({ message: 'Role is required' });
        }

        const query = 'UPDATE users SET role = ? WHERE id = ?';
        await db.query(query, [role, id]);
        
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Delete a registration
// @route   DELETE /api/admin/registrations/:id
const deleteRegistration = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Delete related submission first
        await db.query('DELETE FROM submissions WHERE registration_id = ?', [id]);
        
        // Delete registration
        const query = 'DELETE FROM registrations WHERE id = ?';
        await db.query(query, [id]);
        
        res.status(200).json({ message: 'Registration deleted successfully' });
    } catch (error) {
        console.error('Error deleting registration:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getAllRegistrations,
    getAllUsers,
    getDashboardStats,
    updateUser,
    deleteRegistration
};
