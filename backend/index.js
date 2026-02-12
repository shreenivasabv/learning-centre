const express = require("express");
const cors = require("cors");
const path = require("path"); // <--- MAKE SURE THIS IS HERE
const mongoose = require("mongoose");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Line 11: This will now work because 'path' is defined above
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

app.use("/api/courses", courseRoutes);

// ... your mongoose.connect and app.listen code

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/learning_centre")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("API Running...");
});

app.use("/api/courses", require("./routes/courseRoutes"));




app.listen(5000, () => {
    console.log("Server running on port 5000");
});
