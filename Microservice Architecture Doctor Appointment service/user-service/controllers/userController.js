const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { userSchema } = require("../models/userModel");

exports.signup = async (req, res) => {
  try {
    const { name, password, email, phone } = req.body;
    const registration = req.registrationId;
    const existingDoctor = await userSchema.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const doctor = new userSchema({
      name,
      password: hashedPassword,
      email,
      phone,
      registration,
    });
    await doctor.save();
    res.status(201).json({ message: "Doctor signed up successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const registration = req.registrationId;

    const doctor = await userSchema.findOne({ email });
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    const doctorRegistrationString = doctor.registration.toString();
    const registrationString = registration.toString();

    if (doctorRegistrationString !== registrationString) {
      return res
        .status(403)
        .json({ message: "Forbidden: Registration ID mismatch" });
    }

    const passwordMatch = await bcrypt.compare(password, doctor.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { email: doctor.email, _id: doctor._id },
      "your_secret_key"
    );
    res.status(200).json({ message: "Doctor logged in successfully", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
