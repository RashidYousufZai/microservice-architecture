const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/registerUser")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
  });

// Routes
app.use("/api", authRoutes);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Promise Rejection:", err);
  server.close(() => {
    process.exit(1);
  });
});
