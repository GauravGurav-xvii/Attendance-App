// routes/attendanceRoutes.js
const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

router.post('/signin', attendanceController.signIn);
router.post('/signout', attendanceController.signOut);
router.get('/report/:userId', attendanceController.getAttendanceReport);

module.exports = router;
