const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const programRoutes = require("./routes/programRoutes");
const participationRoutes = require("./routes/participationRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const verificationRoutes = require("./routes/verificationRoutes");
const statusRoutes = require("./routes/statusRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const searchRoutes = require("./routes/searchRoutes");
const reportRoutes = require("./routes/reportRoutes");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/participation", participationRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/verification", verificationRoutes);
app.use("/api/status", statusRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/reports", reportRoutes);

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Infosys Student Tracker Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
