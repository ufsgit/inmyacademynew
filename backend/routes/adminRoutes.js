const express = require('express');
const router = express.Router();
const { getAllRegistrations, getAllUsers, getDashboardStats, updateUser, deleteRegistration } = require('../controllers/adminController');

router.get('/registrations', getAllRegistrations);
router.get('/users', getAllUsers);
router.get('/stats', getDashboardStats);
router.put('/users/:id', updateUser);
router.delete('/registrations/:id', deleteRegistration);

module.exports = router;
