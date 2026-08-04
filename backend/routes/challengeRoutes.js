const express = require('express');
const router = express.Router();
const { getChallenges, createChallenge, registerUser } = require('../controllers/challengeController');

router.route('/')
    .get(getChallenges)
    .post(createChallenge);

const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/register', registerUser);
router.get('/registration/:id', require('../controllers/challengeController').getRegistrationById);

router.post('/upload/:id', upload.fields([
    { name: 'video', maxCount: 1 },
    { name: 'poster', maxCount: 1 }
]), require('../controllers/challengeController').uploadEntry);

module.exports = router;
