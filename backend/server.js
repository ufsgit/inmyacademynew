const express = require('express');
const cors = require('cors');
require('dotenv').config();

const challengeRoutes = require('./routes/challengeRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(require('path').join(__dirname, 'uploads')));

// Routes
app.use('/api/challenges', challengeRoutes);
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/upload', require('./routes/uploadRoutes'));

// Base route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API. Database is connected.' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
