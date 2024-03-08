const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let secretKey = generateSecretKey();

    let userWithSameSecretKey = await User.findOne({ secretKey });
    while (userWithSameSecretKey) {
      secretKey = generateSecretKey();
      userWithSameSecretKey = await User.findOne({ secretKey });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword, secretKey });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ userId: user._id }, "secret_key_for_jwt", {
      expiresIn: "1h",
    });
    const cookieName = "cookie";
    res.cookie(cookieName, token, { httpOnly: true });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserBySecretKey = async (req, res) => {
  try {
    const secretKey = req.headers["secret-key"];
    if (!secretKey) {
      return res
        .status(400)
        .json({ message: "Secret key is missing in headers" });
    }

    const user = await User.findOne({ secretKey });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

function generateSecretKey() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}
