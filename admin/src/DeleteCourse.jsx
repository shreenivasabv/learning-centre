import { useState } from "react";
import axios from "axios";

function DeleteCourse() {
  const [title, setTitle] = useState("");

  const handleDelete = async () => {
    if (!title) {
      alert("Please enter course title");
      return;
    }

    try {
      const res = await axios.delete(
        `http://localhost:5000/api/courses/title/${title}`
      );

      alert(res.data.message);
      setTitle("");

    } catch (error) {
      alert("Course not found or error occurred");
    }
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Delete Course</h2>

      <input
        type="text"
        placeholder="Enter Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={handleDelete} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </div>
  );
}

export default DeleteCourse;
