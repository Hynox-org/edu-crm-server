// @desc    Login user and return JWT
// @route   POST /auth/login
// @access  Public
exports.login = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'Login successful'
    });
};
