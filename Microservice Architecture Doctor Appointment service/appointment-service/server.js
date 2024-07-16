require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/userRouter");
const registeredUserRouter = require("./routes/RegisteredUser");

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/api", userRouter);
app.use("/api1", registeredUserRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
