const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { doctorSchema } = require("../models/doctorModel");

exports.signup = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      specialization,
      experience,
      qualification,
      profilePicture,
      address,
      contactNumber,
    } = req.body;
    const registration = req.registrationId;
    const hashedPassword = await bcrypt.hash(password, 10);
    const doctor = new doctorSchema({
      name,
      email,
      password: hashedPassword,
      specialization,
      experience,
      qualification,
      profilePicture,
      address,
      contactNumber,
      registration,
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
    const registration = req.registrationId;

    const user = await doctorSchema.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userRegistrationString = user.registration.toString();
    const registrationString = registration.toString();

    if (userRegistrationString !== registrationString) {
      return res
        .status(403)
        .json({ message: "Forbidden: Registration ID mismatch" });
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

exports.findDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = req.registrationId;

    const doctor = await doctorSchema.findOne({
      _id: id,
      registration: registration,
    });

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = req.registrationId;

    const doctor = await doctorSchema.findOneAndDelete({
      _id: id,
      registration: registration,
    });

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = req.registrationId;
    const updates = req.body;
    const options = { new: true };

    const doctor = await doctorSchema.findOneAndUpdate(
      { _id: id, registration: registration },
      updates,
      options
    );

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
