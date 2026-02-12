const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

// Add Course (Admin)
router.post("/", async (req, res) => {
    try {
        const newCourse = new Course(req.body);
        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get All Courses (Frontend)
router.get("/", async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
