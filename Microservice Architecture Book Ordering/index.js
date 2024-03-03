const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API Gateway");
});

// Route to Service 1
app.get("/service1", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3000");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to Service 2
app.get("/service2", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3001");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to Service 3
app.get("/service3", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3002");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`API Gateway listening on port ${PORT}`);
});
