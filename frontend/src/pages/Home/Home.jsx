import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/courses")
      .then((res) => {
        // Take only first 4 courses
        setCourses(res.data.slice(0, 4));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Welcome to Learning Centre</h1>
        <p>Build Your Career with Industry Ready Training</p>
        <Link to="/courses">
          <button className="explore-btn">Explore Courses</button>
        </Link>
      </section>

      {/* STATS SECTION */}
      <section className="stats">
        <div>
          <h2>5000+</h2>
          <p>Students Placed</p>
        </div>
        <div>
          <h2>100+</h2>
          <p>Companies Hiring</p>
        </div>
        <div>
          <h2>10+</h2>
          <p>Branches</p>
        </div>
      </section>

      {/* TOP COURSES SECTION */}
      <section className="top-courses">
        <h2>Top Courses</h2>

        <div className="course-container">
          {courses.map((course) => (
            <div key={course._id} className="course-card">

              <img
                src={`http://localhost:5000/uploads/${course.image}`}
                alt={course.title}
                onError={(e) => { e.target.src = "https://via.placeholder.com/300"; }}
              />

              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <span className="price">₹{course.price}</span>

              <Link to="/courses">
                <button>View Details</button>
              </Link>

            </div>
          ))}
        </div>

        <Link to="/courses">
          <button className="view-all-btn">View All Courses</button>
        </Link>

      </section>

    </div>
  );
}

export default Home;
