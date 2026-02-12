import React, { useEffect, useState } from "react";
import axios from "axios"; // Ensure you have installed: npm install axios
import "./Courses.css";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Replace with your actual backend URL
    axios.get("http://localhost:5000/api/courses") 
      .then((res) => setCourses(res.data))
      .catch((err) => console.log("Error fetching courses:", err));
  }, []);

  return (
    <div className="courses-container">
      <h1>Our Professional Courses</h1>
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course._id} className="course-card">
            <img 
            src={`http://localhost:5000/uploads/${course.image}`} 
            alt={course.title} 
            onError={(e) => { e.target.src = 'https://via.placeholder.com/300'; }} // Fallback if image fails
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