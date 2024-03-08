const mongoose = require("mongoose");
const { connectDBs } = require("../config/db");

const appointmentSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, required: true },
  patientId: { type: mongoose.Schema.Types.ObjectId, required: true },
  registration: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending",
  },
});

const { doctordb } = connectDBs();
module.exports = {
  appointmentSchema: doctordb.model("appoinment", appointmentSchema),
};
