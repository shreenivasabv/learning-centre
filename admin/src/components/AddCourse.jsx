import { useState } from "react";
import axios from "axios";

function AddCourse() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/courses/add", formData);
      alert("Course Added Successfully");

      setTitle("");
      setDescription("");
      setPrice("");
      setImage(null);

    } catch (error) {
      alert("Error adding course");
    }
  };

  return (
    <div className="form">

      <input
        type="text"
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button className="btn-add" onClick={handleSubmit}>
        Add Course
      </button>

    </div>
  );
}

export default AddCourse;
