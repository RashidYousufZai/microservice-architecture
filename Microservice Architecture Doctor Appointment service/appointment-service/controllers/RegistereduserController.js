const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { userSchema } = require("../models/RrgistrationUserModel");

exports.getUserBySecretKey = async (req, res) => {
  try {
    console.log("Inside getUserBySecretKey function");
    const secretKey = req.headers["secret-key"];
    console.log("Secret Key:", secretKey);

    if (!secretKey) {
      console.log("Secret key is missing");
      return res
        .status(400)
        .json({ message: "Secret key is missing in headers" });
    }

    console.log("Before querying database");
    const user = await userSchema.findOne({ secretKey });
    console.log("User found:", user);

    if (!user) {
      console.log("User not found in database");
      return res.status(404).json({ message: "User not found" });
    }
    console.log("User found in database");
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};
