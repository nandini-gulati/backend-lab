const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const todoRoutes = require("./routes/todoRoutes");

dotenv.config();
const app = express();

app.use(express.json());

// 🔗 Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// 🧠 Routes
app.use("/api/todos", todoRoutes);

// 🌍 Start Server
const PORT = process.env.PORT || 4000;
app.get("/", (req, res) => {
    res.send("✅ Backend running successfully — use /api/todos");
  });   
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
