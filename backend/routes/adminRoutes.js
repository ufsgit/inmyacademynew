const express = require('express');
const router = express.Router();
const { getAllRegistrations, getAllUsers, getDashboardStats, updateUser, deleteRegistration, getAllModuleProjects, deleteModuleProject, getAllAdminDocuments, deleteAdminDocument } = require('../controllers/adminController');

router.get('/registrations', getAllRegistrations);
router.get('/users', getAllUsers);
router.get('/stats', getDashboardStats);
router.get('/projects', getAllModuleProjects);
router.get('/documents', getAllAdminDocuments);
router.put('/users/:id', updateUser);
router.delete('/registrations/:id', deleteRegistration);
router.delete('/projects/:id', deleteModuleProject);
router.delete('/documents/:id', deleteAdminDocument);

module.exports = router;
