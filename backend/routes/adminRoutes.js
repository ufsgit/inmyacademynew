const express = require('express');
const router = express.Router();
const { getAllRegistrations, getAllUsers, getDashboardStats, updateUser, deleteRegistration, getAllModuleProjects, deleteModuleProject } = require('../controllers/adminController');

router.get('/registrations', getAllRegistrations);
router.get('/users', getAllUsers);
router.get('/stats', getDashboardStats);
router.get('/projects', getAllModuleProjects);
router.put('/users/:id', updateUser);
router.delete('/registrations/:id', deleteRegistration);
router.delete('/projects/:id', deleteModuleProject);

module.exports = router;
