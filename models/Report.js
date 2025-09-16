const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  exam: {
    type: String,
    required: true,
  },
  marks: {
    type: Map,
    of: Number,
  },
  percentage: {
    type: Number,
  },
  grade: {
    type: String,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming a Teacher or Admin creates reports
    required: true,
  },
});

// Calculate percentage and grade before saving
ReportSchema.pre('save', function (next) {
  if (this.marks) {
    const totalMarks = Object.values(this.marks).reduce((acc, curr) => acc + curr, 0);
    const numberOfSubjects = Object.keys(this.marks).length;
    if (numberOfSubjects > 0) {
      this.percentage = (totalMarks / (numberOfSubjects * 100)) * 100; // Assuming max 100 marks per subject
      // Simple grading logic, can be expanded
      if (this.percentage >= 90) {
        this.grade = 'A';
      } else if (this.percentage >= 80) {
        this.grade = 'B';
      } else if (this.percentage >= 70) {
        this.grade = 'C';
      } else if (this.percentage >= 60) {
        this.grade = 'D';
      } else {
        this.grade = 'F';
      }
    }
  }
  next();
});

module.exports = mongoose.model('Report', ReportSchema);
