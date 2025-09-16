const express = require('express');
const router = express.Router();
const { addMarks, getStudentReport, getClassReport } = require('../controllers/reportController');
const auth = require('../middleware/auth');

// @route   POST /report/marks
// @desc    Add marks
// @access  Private
router.post('/marks', auth(['admin', 'teacher']), addMarks);

// @route   GET /report/student/:studentId
// @desc    Get student report
// @access  Private
router.get('/student/:studentId', auth(['admin', 'teacher']), getStudentReport);

// @route   GET /report/class/:classId
// @desc    Get class report
// @access  Private
router.get('/class/:classId', auth(['admin', 'teacher']), getClassReport);

module.exports = router;
