const db = require('../config/db');

exports.getLeaderboard = async (req, res) => {
    try {
        const { format, phase, category } = req.query;

        // Note: For MySQL 8.0+, RANK() is supported.
        let query = `
            SELECT 
                RANK() OVER (ORDER BY Score DESC) as \`Rank\`,
                Id,
                CompetitionFormat,
                CompetitionPhase,
                CategoryTrack,
                ParticipantName,
                Country,
                TeamsCount,
                Score,
                Award
            FROM 
                leaderboard
            WHERE 
                CompetitionFormat = ?
        `;
        
        const params = [format];

        if (phase && phase !== 'null' && phase !== 'undefined' && phase !== '') {
            query += ' AND CompetitionPhase = ?';
            params.push(phase);
        }

        if (category && category !== 'All' && category !== 'null' && category !== 'undefined' && category !== '') {
            query += ' AND CategoryTrack = ?';
            params.push(category);
        }

        query += ' ORDER BY Score DESC';

        const [rows] = await db.query(query, params);
        
        res.json({ success: true, data: rows });
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch leaderboard data' });
    }
};

exports.getAllLeaderboard = async (req, res) => {
    try {
        const query = 'SELECT * FROM leaderboard ORDER BY CompetitionFormat, CompetitionPhase, Score DESC';
        const [rows] = await db.query(query);
        res.json({ success: true, data: rows });
    } catch (error) {
        console.error('Error fetching all leaderboard entries:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch all leaderboard data' });
    }
};

exports.addLeaderboardEntry = async (req, res) => {
    try {
        const { CompetitionFormat, CompetitionPhase, CategoryTrack, ParticipantName, Country, TeamsCount, Score, Award } = req.body;
        
        if (!CompetitionFormat || !ParticipantName || !Country || Score === undefined) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }

        const query = `
            INSERT INTO leaderboard 
            (CompetitionFormat, CompetitionPhase, CategoryTrack, ParticipantName, Country, TeamsCount, Score, Award) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const params = [
            CompetitionFormat,
            CompetitionPhase || null,
            CategoryTrack || null,
            ParticipantName,
            Country,
            TeamsCount || null,
            Score,
            Award || null
        ];

        const [result] = await db.query(query, params);
        res.json({ success: true, message: 'Leaderboard entry added successfully', insertId: result.insertId });
    } catch (error) {
        console.error('Error adding leaderboard entry:', error);
        res.status(500).json({ success: false, message: 'Failed to add leaderboard entry' });
    }
};

exports.deleteLeaderboardEntry = async (req, res) => {
    try {
        const { id } = req.params;
        const query = 'DELETE FROM leaderboard WHERE Id = ?';
        await db.query(query, [id]);
        res.json({ success: true, message: 'Leaderboard entry deleted successfully' });
    } catch (error) {
        console.error('Error deleting leaderboard entry:', error);
        res.status(500).json({ success: false, message: 'Failed to delete leaderboard entry' });
    }
};
