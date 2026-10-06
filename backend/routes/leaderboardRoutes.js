const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboardController');

// GET /api/leaderboard?format=SCHOOL&phase=Online Phase&category=All
router.get('/', leaderboardController.getLeaderboard);

// Admin endpoints
router.get('/all', leaderboardController.getAllLeaderboard);
router.post('/', leaderboardController.addLeaderboardEntry);
router.delete('/:id', leaderboardController.deleteLeaderboardEntry);

module.exports = router;
