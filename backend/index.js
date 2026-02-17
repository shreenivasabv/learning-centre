const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const courseRoutes = require("./routes/courseRoutes");
const contactRoutes = require("./routes/contactRoutes"); 
require("dotenv").config();
console.log("MONGO_URI:", process.env.MONGO_URI);


const app = express();

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "https://your-app-name.vercel.app"]
}));

app.use(express.json());

// Static Files
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

// Routes
app.use("/api/courses", courseRoutes);
app.use("/api/contact", contactRoutes); // Changed to singular to match your frontend screenshot


app.get("api/test",contactRoutes);       

// Root Route
app.get("/", (req, res) => {
    res.send("API Running...");
});
mongoose.connect(process.env.MONGO_URI)


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});