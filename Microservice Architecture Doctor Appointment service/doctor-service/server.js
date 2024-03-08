require("dotenv").config();
const express = require("express");
const doctorRoutes = require("./routes/doctorRoute");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/api", doctorRoutes);
app.use("/api1", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
