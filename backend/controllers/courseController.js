const db = require('../config/db');

// GET all courses
const getAllCourses = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM courses ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        console.error('Error fetching courses:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

// GET single course by ID
const getCourseById = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM courses WHERE id = ?', [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ message: 'Course not found' });
        res.json(rows[0]);
    } catch (err) {
        console.error('Error fetching course:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

// POST create a new course
const createCourse = async (req, res) => {
    const { 
        title, description, difficulty, pricing, visibility, is_public,
        image, about_the_track, phase1, final, extras, lessons,
        what_will_i_learn, target_audience, duration_hours, duration_mins, materials_included, requirements,
        lectures, students_max, level, language, certificate
    } = req.body;

    if (!title || !title.trim()) {
        return res.status(400).json({ message: 'Course title is required.' });
    }

    try {
        const lessonsPayload = lessons ? (typeof lessons === 'string' ? lessons : JSON.stringify(lessons)) : '[]';

        const [result] = await db.query(
            'INSERT INTO courses (title, description, difficulty, pricing, visibility, is_public, image, about_the_track, phase1, final, extras, lessons, what_will_i_learn, target_audience, duration_hours, duration_mins, materials_included, requirements, lectures, students_max, level, language, certificate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
                title.trim(),
                description || '',
                difficulty || 'Intermediate',
                pricing || 'Free',
                visibility || 'Public',
                is_public !== undefined ? (is_public ? 1 : 0) : 1,
                image || '',
                about_the_track || '',
                phase1 || '',
                final || '',
                extras || '',
                lessonsPayload,
                what_will_i_learn || '',
                target_audience || '',
                duration_hours || 0,
                duration_mins || 0,
                materials_included || '',
                requirements || '',
                lectures || 0,
                students_max || 0,
                level || 'All Levels',
                language || 'English',
                certificate || 'Yes'
            ]
        );
        const [newCourse] = await db.query('SELECT * FROM courses WHERE id = ?', [result.insertId]);
        res.status(201).json(newCourse[0]);
    } catch (err) {
        console.error('Error creating course:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

// PUT update a course
const updateCourse = async (req, res) => {
    const { 
        title, description, difficulty, pricing, visibility, is_public,
        image, about_the_track, phase1, final, extras, lessons,
        what_will_i_learn, target_audience, duration_hours, duration_mins, materials_included, requirements,
        lectures, students_max, level, language, certificate
    } = req.body;

    if (!title || !title.trim()) {
        return res.status(400).json({ message: 'Course title is required.' });
    }

    try {
        const [check] = await db.query('SELECT id FROM courses WHERE id = ?', [req.params.id]);
        if (check.length === 0) return res.status(404).json({ message: 'Course not found' });

        const lessonsPayload = lessons ? (typeof lessons === 'string' ? lessons : JSON.stringify(lessons)) : '[]';

        await db.query(
            'UPDATE courses SET title = ?, description = ?, difficulty = ?, pricing = ?, visibility = ?, is_public = ?, image = ?, about_the_track = ?, phase1 = ?, final = ?, extras = ?, lessons = ?, what_will_i_learn = ?, target_audience = ?, duration_hours = ?, duration_mins = ?, materials_included = ?, requirements = ?, lectures = ?, students_max = ?, level = ?, language = ?, certificate = ? WHERE id = ?',
            [
                title.trim(),
                description || '',
                difficulty || 'Intermediate',
                pricing || 'Free',
                visibility || 'Public',
                is_public !== undefined ? (is_public ? 1 : 0) : 1,
                image || '',
                about_the_track || '',
                phase1 || '',
                final || '',
                extras || '',
                lessonsPayload,
                what_will_i_learn || '',
                target_audience || '',
                duration_hours || 0,
                duration_mins || 0,
                materials_included || '',
                requirements || '',
                lectures || 0,
                students_max || 0,
                level || 'All Levels',
                language || 'English',
                certificate || 'Yes',
                req.params.id
            ]
        );
        const [updated] = await db.query('SELECT * FROM courses WHERE id = ?', [req.params.id]);
        res.json(updated[0]);
    } catch (err) {
        console.error('Error updating course:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

// DELETE a course
const deleteCourse = async (req, res) => {
    try {
        const [check] = await db.query('SELECT id FROM courses WHERE id = ?', [req.params.id]);
        if (check.length === 0) return res.status(404).json({ message: 'Course not found' });

        await db.query('DELETE FROM courses WHERE id = ?', [req.params.id]);
        res.json({ message: 'Course deleted successfully' });
    } catch (err) {
        console.error('Error deleting course:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse };
