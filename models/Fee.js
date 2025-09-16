const mongoose = require('mongoose');

const FeeSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  academicYear: {
    type: String,
    required: true,
  },
  totalFee: {
    type: Number,
    required: true,
  },
  paid: {
    type: Number,
    default: 0,
  },
  due: {
    type: Number,
    default: 0,
  },
  lastPayment: {
    amount: {
      type: Number,
    },
    date: {
      type: Date,
    },
    txnId: {
      type: String,
    },
  },
});

// Calculate due amount before saving
FeeSchema.pre('save', function (next) {
  this.due = this.totalFee - this.paid;
  next();
});

module.exports = mongoose.model('Fee', FeeSchema);
