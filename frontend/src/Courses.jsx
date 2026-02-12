import { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>All Courses</h2>

      {courses.map(course => (
        <div key={course._id} style={{border:"1px solid black", margin:"10px", padding:"10px"}}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <p>₹{course.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Courses;
