const mongoose = require("mongoose");
const { connectDBs } = require("../config/db");

// const doctorSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   // registration: {
//   //   type: mongoose.Schema.Types.ObjectId,
//   //   required: true,
//   // },
//   specialization: {
//     type: String,
//     required: true,
//   },
//   experience: {
//     type: Number,
//     required: true,
//   },
//   qualification: {
//     type: String,
//     required: true,
//   },
//   profilePicture: {
//     type: String,
//   },
//   address: {
//     street: String,
//     city: String,
//     state: String,
//     zip: String,
//   },
//   contactNumber: {
//     type: String,
//   },
// });

// const Doctor = mongoose.model("Doctor", doctorSchema);

// module.exports = Doctor;

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  registration: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
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

const { doctordb } = connectDBs();
module.exports = { doctorSchema: doctordb.model("Doctor", doctorSchema) };
