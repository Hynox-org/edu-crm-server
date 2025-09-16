// @desc    Mark attendance
// @route   POST /attendance
// @access  Private
exports.markAttendance = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'Attendance marked'
    });
};

// @desc    Get attendance by student
// @route   GET /attendance/student/:studentId
// @access  Private
exports.getAttendanceByStudent = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Attendance for student ${req.params.studentId}`
    });
};

// @desc    Get attendance by class
// @route   GET /attendance/class/:classId
// @access  Private
exports.getAttendanceByClass = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Attendance for class ${req.params.classId}`
    });
};
