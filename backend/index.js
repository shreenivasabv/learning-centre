require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

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
