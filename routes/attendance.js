const express = require('express');
const router = express.Router();
const { markAttendance, getAttendanceByStudent, getAttendanceByClass } = require('../controllers/attendanceController');
const auth = require('../middleware/auth');

// @route   POST /attendance
// @desc    Mark attendance
// @access  Private
router.post('/', auth(['admin', 'teacher']), markAttendance);

// @route   GET /attendance/student/:studentId
// @desc    Get attendance by student
// @access  Private
router.get('/student/:studentId', auth(['admin', 'teacher']), getAttendanceByStudent);

// @route   GET /attendance/class/:classId
// @desc    Get attendance by class
// @access  Private
router.get('/class/:classId', auth(['admin', 'teacher']), getAttendanceByClass);

module.exports = router;
