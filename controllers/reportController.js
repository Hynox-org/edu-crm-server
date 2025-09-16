// @desc    Add marks
// @route   POST /report/marks
// @access  Private
exports.addMarks = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'Marks added successfully'
    });
};

// @desc    Get student report
// @route   GET /report/student/:studentId
// @access  Private
exports.getStudentReport = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Report for student ${req.params.studentId}`
    });
};

// @desc    Get class report
// @route   GET /report/class/:classId
// @access  Private
exports.getClassReport = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Report for class ${req.params.classId}`
    });
};
