const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { userSchema } = require("../models/UserModel");

exports.getUserBySecretKey = async (req, res) => {
  try {
    console.log("Inside getUserBySecretKey function"); // Log to indicate function execution
    const secretKey = req.headers["secret-key"];
    console.log("Secret Key:", secretKey); // Log the value of secretKey

    if (!secretKey) {
      console.log("Secret key is missing"); // Log if secret key is missing
      return res
        .status(400)
        .json({ message: "Secret key is missing in headers" });
    }

    console.log("Before querying database"); // Log before database query
    const user = await userSchema.findOne({ secretKey });
    console.log("User found:", user); // Log the user object

    if (!user) {
      console.log("User not found in database"); // Log if user is not found
      return res.status(404).json({ message: "User not found" });
    }
    console.log("User found in database");
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};
