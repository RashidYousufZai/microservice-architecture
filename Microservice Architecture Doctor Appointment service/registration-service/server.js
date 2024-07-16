const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/userRoutes");
const cors = require("cors");

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

app.use(cors(corsOptions));

var corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

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
