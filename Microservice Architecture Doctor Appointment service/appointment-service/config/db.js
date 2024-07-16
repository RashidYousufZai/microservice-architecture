const mongoose = require("mongoose");

const MONGODB_URI_1 = process.env.MONGODB_URI_1;
const MONGODB_URI_2 = process.env.MONGODB_URI_2;

const connectDBs = () => {
  try {
    const doctordb = mongoose.createConnection(MONGODB_URI_1);
    const appoinmentdb = mongoose.createConnection(MONGODB_URI_2);
    console.log("database is connected");
    return { doctordb, appoinmentdb };
  } catch (error) {
    console.log(`Error:${error.message}`);
    process.exit(1);
  }
};

module.exports = { connectDBs };
