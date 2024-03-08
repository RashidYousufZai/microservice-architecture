// server.js
const express = require("express");
const mongoose = require("mongoose");
const patientRoutes = require("./routes/patientRoute.js");

const app = express();
const PORT = process.env.PORT || 3002;
const MONGODB_URI = "mongodb://localhost:27017/patientdb";

app.use(express.json());
app.use("/api", patientRoutes);

mongoose.connect(MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
