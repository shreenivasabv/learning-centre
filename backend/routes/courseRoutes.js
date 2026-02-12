const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Course = require("../models/Course");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });


router.get("/", async (req, res) => { // This combines with prefix to make /api/courses
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST route
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    // These only work INSIDE the function
    console.log("Data received:", req.body); 
    console.log("File received:", req.file);

    const newCourse = new Course({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      image: req.file ? req.file.filename : "default.jpg" 
    });

    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json(err);
  }
});
// backend/routes/courseRoutes.js


// DELETE COURSE BY TITLE
// This handler specifically opens the door for: DELETE /api/courses/title/CourseName
// This route matches: DELETE http://localhost:5000/api/courses/title/YourCourseName
router.delete("/title/:title", async (req, res) => {
  try {
    const courseTitle = req.params.title;
    // We search the database for a course matching that exact title
    const deletedCourse = await Course.findOneAndDelete({ title: courseTitle });

    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found!" });
    }

    res.status(200).json({ message: "Course deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


module.exports = router;