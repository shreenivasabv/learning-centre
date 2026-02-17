const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const courseRoutes = require("./routes/courseRoutes");
const contactRoutes = require("./routes/contactRoutes"); 
require("dotenv").config();

const app = express();

// 1. CORS Middleware - Updated to trust your specific Vercel URL
app.use(cors({
    origin: [
        "http://localhost:5173", 
        "https://learning-centre.vercel.app",
        "https://learning-centre-git-main-shreenivasabvs-projects.vercel.app"
    ],
    credentials: true
}));

// 2. Body Parser Middleware
app.use(express.json());

// 3. Static Files
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

// 4. Routes
app.use("/api/courses", courseRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", require("./routes/authRoutes")); // Add this line for auth routes

// Root Route
app.get("/", (req, res) => {
    res.send("API Running...");
});

// 5. MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});