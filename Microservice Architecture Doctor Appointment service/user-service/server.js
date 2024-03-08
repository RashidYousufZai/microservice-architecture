require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/userRouter");
const registeredUserRouter = require("./routes/RegisteredUser");

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.use("/api", userRouter);
app.use("/api1", registeredUserRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
