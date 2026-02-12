import { useState } from "react";
import axios from "axios";

function DeleteCourse() {
  const [title, setTitle] = useState("");

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/courses/title/${title}`
      );
      alert(res.data.message);
      setTitle("");
    } catch (err) {
      alert("Course not found!");
    }
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button className="btn-delete" onClick={handleDelete}>
        Delete Course
      </button>
    </div>
  );
}

export default DeleteCourse;
