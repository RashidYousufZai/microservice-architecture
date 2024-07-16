const mongoose = require("mongoose");

const MONGODB_URI_1 = process.env.MONGODB_URI_1;
const MONGODB_URI_2 = process.env.MONGODB_URI_2;

const connectDBs = () => {
  try {
    const doctordb = mongoose.createConnection(
      "mongodb://localhost:27017/doctordb"
    );
    const userDB = mongoose.createConnection(
      "mongodb://localhost:27017/userDB"
    );
    console.log("database is connected");
    return { doctordb, userDB };
  } catch (error) {
    console.log(`Error:${error.message}`);
    process.exit(1);
  }
};

module.exports = { connectDBs };
