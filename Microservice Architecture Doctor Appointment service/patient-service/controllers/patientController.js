const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Patient = require("../models/doctorModel.js");

exports.signup = async (req, res) => {
  try {
    const {
      name,
      email,
      age,
      gender,
      bloodGroup,
      profilePicture,
      contactNumber,
      address,
      password,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const doctor = new Patient({
      name,
      email,
      age,
      gender,
      bloodGroup,
      profilePicture,
      contactNumber,
      address,
      password: hashedPassword,
    });

    await doctor.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Patient.findOne({ email });
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
