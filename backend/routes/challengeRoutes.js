const express = require('express');
const router = express.Router();
const multer = require('multer');
const { getChallenges, createChallenge, registerUser, uploadEntry, getRegistrationById } = require('../controllers/challengeController');

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 250 * 1024 * 1024 // 250MB limit for video submissions
    }
});

router.route('/')
    .get(getChallenges)
    .post(createChallenge);

router.post('/register', registerUser);
router.get('/registration/:id', getRegistrationById);

router.post('/upload/:id', upload.fields([
    { name: 'video', maxCount: 1 },
    { name: 'poster', maxCount: 1 }
]), uploadEntry);

module.exports = router;
