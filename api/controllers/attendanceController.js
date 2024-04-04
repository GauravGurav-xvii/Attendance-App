// controllers/attendanceController.js
const Attendance = require('../model/attendanceModel');

exports.signIn = async (req, res) => {
    const { userId } = req.body;

    try {
        const today = new Date().setHours(0, 0, 0, 0);
        const existingAttendance = await Attendance.findOne({ userId, date: today });

        if (existingAttendance) {
            return res.status(400).json({ message: 'User already signed in for today' });
        }

        const newAttendance = new Attendance({ userId, signInTime: new Date() });
        await newAttendance.save();

        res.status(201).json({ message: 'User signed in successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.signOut = async (req, res) => {
    const { userId } = req.body;

    try {
        const today = new Date().setHours(0, 0, 0, 0);
        const existingAttendance = await Attendance.findOne({ userId, date: today });

        if (!existingAttendance) {
            return res.status(400).json({ message: 'User has not signed in for today' });
        }

        existingAttendance.signOutTime = new Date();
        await existingAttendance.save();

        res.status(200).json({ message: 'User signed out successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getAttendanceReport = async (req, res) => {
    const { userId } = req.params;

    try {
        const attendanceReport = await Attendance.find({ userId });
        res.status(200).json(attendanceReport);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
