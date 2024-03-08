const mongoose = require("mongoose");
const { connectDBs } = require("../config/db");

const userSchema = new mongoose.Schema({
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
  secretKey: {
    type: String,
    required: true,
    unique: true,
  },
});

const { userDB } = connectDBs();
module.exports = { userSchema: userDB.model("User", userSchema) };
