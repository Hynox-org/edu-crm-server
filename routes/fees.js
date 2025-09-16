const express = require('express');
const router = express.Router();
const { getStudentFees, payFees, getFeesSummary } = require('../controllers/feesController');
const auth = require('../middleware/auth');

// @route   GET /fees/student/:studentId
// @desc    Get student fees
// @access  Private
router.get('/student/:studentId', auth(['admin', 'accountant']), getStudentFees);

// @route   POST /fees/pay
// @desc    Pay fees
// @access  Private
router.post('/pay', auth(['admin', 'accountant']), payFees);

// @route   GET /fees/summary
// @desc    Get fees summary
// @access  Private
router.get('/summary', auth(['admin', 'accountant']), getFeesSummary);

module.exports = router;
