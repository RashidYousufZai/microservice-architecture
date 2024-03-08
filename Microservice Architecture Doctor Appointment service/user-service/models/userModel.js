const mongoose = require("mongoose");
const { connectDBs } = require("../config/db");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  registration: { type: mongoose.Schema.Types.ObjectId, required: true },
});

const { doctordb } = connectDBs();
module.exports = { userSchema: doctordb.model("user", userSchema) };
