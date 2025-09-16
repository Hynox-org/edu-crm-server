const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

// @route   POST /auth/login
// @desc    Login user and return JWT
// @access  Public
router.post('/login', login);

module.exports = router;
