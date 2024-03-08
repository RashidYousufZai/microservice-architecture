const { default: mongoose } = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  //   registration: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Registration",
  //     required: true,
  //   },
  age: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  bloodGroup: {
    type: String,
  },
  profilePicture: {
    type: String, // URL to profile picture
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  contactNumber: {
    type: String,
  },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
