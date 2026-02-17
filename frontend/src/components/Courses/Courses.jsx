import React, { useEffect, useState } from "react";
import axios from "axios"; 
import "./Courses.css";

function Courses() {
  const [courses, setCourses] = useState([]);

  // Get the base URL from your .env file
  const API_BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // FIX: Use the dynamic variable instead of localhost
    axios.get(`${API_BASE_URL}/api/courses`) 
      .then((res) => setCourses(res.data))
      .catch((err) => console.log("Error fetching courses:", err));
  }, [API_BASE_URL]);

  return (
    <div className="courses-container">
      <h1>Our Professional Courses</h1>
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course._id} className="course-card">
            <img 
              // FIX: Use the dynamic variable for the image path too
              src={`${API_BASE_URL}/uploads/${course.image}`} 
              alt={course.title} 
              onError={(e) => { e.target.src = 'https://via.placeholder.com/300'; }} 
            />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <span className="price">₹{course.price}</span>
              <button className="enroll-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;