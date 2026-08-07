const db = require('../config/db');

// @desc    Get all challenges
// @route   GET /api/challenges
const getChallenges = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM challenges');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching challenges:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Create a challenge or registration
// @route   POST /api/challenges
const createChallenge = async (req, res) => {
    try {
        const { challenge_name, description, category } = req.body;
        
        // Basic validation
        if (!challenge_name) {
            return res.status(400).json({ message: 'Please provide at least a challenge_name' });
        }

        const query = 'INSERT INTO challenges (challenge_name, description, category) VALUES (?, ?, ?)';
        const [result] = await db.query(query, [challenge_name, description, category]);
        
        res.status(201).json({ id: result.insertId, challenge_name, description, category });
    } catch (error) {
        console.error('Error creating challenge:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Register user
// @route   POST /api/challenges/register
const registerUser = async (req, res) => {
    try {
        const { 
            fullName, 
            age, 
            country, 
            city, 
            email, 
            password, 
            parentName, 
            parentEmail, 
            parentConsent,
            challengeName,
            category,
            teamsData
        } = req.body;
        
        let finalChallengeName = null;
        if (challengeName) {
            const [existingChallenge] = await db.query('SELECT challenge_name FROM challenges WHERE challenge_name = ? LIMIT 1', [challengeName]);
            if (existingChallenge.length > 0) {
                finalChallengeName = existingChallenge[0].challenge_name;
            } else {
                await db.query('INSERT INTO challenges (challenge_name, category) VALUES (?, ?)', [challengeName, category || null]);
                finalChallengeName = challengeName;
            }
        }
        
        // Stringify teamsData if provided
        let teamsDataStr = teamsData ? JSON.stringify(teamsData) : null;
        
        // Check if a registration with this school name (for schools) or email (for individuals) already exists
        let queryStr = 'SELECT id, challenge_name, teams_data FROM registrations WHERE email = ? LIMIT 1';
        let queryParam = email;
        
        if (Number(age) === 0) {
            queryStr = 'SELECT id, challenge_name, teams_data FROM registrations WHERE full_name = ? LIMIT 1';
            queryParam = fullName;
        }

        const [existingReg] = await db.query(queryStr, [queryParam]);
        
        if (existingReg.length > 0) {
            let updatedChallengeName = finalChallengeName;
            const currentChallengeName = existingReg[0].challenge_name;
            
            if (currentChallengeName && currentChallengeName !== finalChallengeName) {
                if (!currentChallengeName.includes(finalChallengeName)) {
                    updatedChallengeName = currentChallengeName + ', ' + finalChallengeName;
                } else {
                    updatedChallengeName = currentChallengeName;
                }
            }

            // Merge teamsData
            let mergedTeamsData = teamsData || {};
            if (existingReg[0].teams_data) {
                try {
                    const oldTeams = JSON.parse(existingReg[0].teams_data);
                    
                    let mergedStudentNames = { ...(oldTeams.studentNames || {}) };
                    if (teamsData && teamsData.studentNames) {
                        for (const key of Object.keys(teamsData.studentNames)) {
                            const parts = key.split('-');
                            if (parts.length === 3) {
                                const category = parts[0];
                                const teamIndex = parseInt(parts[1], 10);
                                const memberIndex = parts[2];
                                
                                let offset = 0;
                                if (category === 'trailblazers') offset = oldTeams.trailblazersCount || 0;
                                else if (category === 'visioneers') offset = oldTeams.visioneersCount || 0;
                                else if (category === 'strategists') offset = oldTeams.strategistsCount || 0;
                                
                                const newTeamIndex = teamIndex + offset;
                                const newKey = `${category}-${newTeamIndex}-${memberIndex}`;
                                mergedStudentNames[newKey] = teamsData.studentNames[key];
                            }
                        }
                    }

                    mergedTeamsData = {
                        trailblazersCount: (oldTeams.trailblazersCount || 0) + (teamsData ? (teamsData.trailblazersCount || 0) : 0),
                        visioneersCount: (oldTeams.visioneersCount || 0) + (teamsData ? (teamsData.visioneersCount || 0) : 0),
                        strategistsCount: (oldTeams.strategistsCount || 0) + (teamsData ? (teamsData.strategistsCount || 0) : 0),
                        studentNames: mergedStudentNames
                    };
                } catch (e) {
                    console.error("Error parsing existing teams data", e);
                }
            }
            teamsDataStr = JSON.stringify(mergedTeamsData);

            const updateQuery = `
                UPDATE registrations 
                SET age = ?, country = ?, city = ?, email = ?, password = ?, parent_name = ?, parent_email = ?, parent_consent = ?, challenge_name = ?, teams_data = ?
                WHERE id = ?
            `;
            
            await db.query(updateQuery, [
                age || 0, 
                country || '', 
                city || '', 
                email || '', 
                password || '', 
                parentName || null, 
                parentEmail || null, 
                parentConsent ? 1 : 0,
                updatedChallengeName,
                teamsDataStr,
                existingReg[0].id
            ]);
            
            return res.status(200).json({ message: 'Registration updated successfully!', id: existingReg[0].id });
        }

        // If not existing, teamsDataStr is already set to the provided teamsData (at the top)

        const query = `
            INSERT INTO registrations 
            (full_name, age, country, city, email, password, parent_name, parent_email, parent_consent, challenge_name, teams_data) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        
        const [result] = await db.query(query, [
            fullName || '', 
            age || 0, 
            country || '', 
            city || '', 
            email || '', 
            password || '', 
            parentName || null, 
            parentEmail || null, 
            parentConsent ? 1 : 0,
            finalChallengeName || '',
            teamsDataStr
        ]);
        
        res.status(201).json({ message: 'Registration and payment successful!', id: result.insertId });
    } catch (error) {
        console.error('Error registering:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const uploadEntry = async (req, res) => {
    try {
        const registrationId = req.params.id;
        const summary = req.body.summary;
        
        const videoFile = req.files && req.files['video'] ? req.files['video'][0] : null;
        const posterFile = req.files && req.files['poster'] ? req.files['poster'][0] : null;

        if (!videoFile) {
            return res.status(400).json({ message: 'Video file is required.' });
        }

        const videoPath = `/uploads/${videoFile.filename}`;
        const posterPath = posterFile ? `/uploads/${posterFile.filename}` : null;

        const checkQuery = `SELECT id FROM submissions WHERE registration_id = ?`;
        const [existing] = await db.query(checkQuery, [registrationId]);

        // Fetch challenge_name and category for this registration
        const regQuery = `
            SELECT r.challenge_name, c.category 
            FROM registrations r 
            LEFT JOIN challenges c ON r.challenge_name = c.challenge_name 
            WHERE r.id = ?
        `;
        const [regInfo] = await db.query(regQuery, [registrationId]);
        const challengeName = regInfo.length > 0 ? regInfo[0].challenge_name : null;
        const category = regInfo.length > 0 ? regInfo[0].category : null;

        if (existing.length > 0) {
            const updateQuery = `
                UPDATE submissions 
                SET video_path = ?, poster_path = ?, summary = ?, status = 'Submitted', challenge_name = ?, category = ?
                WHERE registration_id = ?
            `;
            await db.query(updateQuery, [videoPath, posterPath, summary, challengeName, category, registrationId]);
        } else {
            const insertQuery = `
                INSERT INTO submissions (registration_id, video_path, poster_path, summary, status, challenge_name, category)
                VALUES (?, ?, ?, ?, 'Submitted', ?, ?)
            `;
            await db.query(insertQuery, [registrationId, videoPath, posterPath, summary, challengeName, category]);
        }

        res.status(200).json({ message: 'Entry uploaded successfully!' });
    } catch (error) {
        console.error('Error uploading entry:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getRegistrationById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.query('SELECT * FROM registrations WHERE id = ? LIMIT 1', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Registration not found' });
        }
        const reg = rows[0];
        // Parse teams_data JSON
        if (reg.teams_data && typeof reg.teams_data === 'string') {
            try { reg.teams_data = JSON.parse(reg.teams_data); } catch(e) {}
        }
        res.status(200).json(reg);
    } catch (error) {
        console.error('Error fetching registration:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getChallenges,
    createChallenge,
    registerUser,
    uploadEntry,
    getRegistrationById
};
