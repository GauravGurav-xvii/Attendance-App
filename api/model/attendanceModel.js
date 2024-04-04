// models/Attendance.js
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now },
    signInTime: { type: Date },
    signOutTime: { type: Date }
});

module.exports = mongoose.model('Attendance', attendanceSchema);
