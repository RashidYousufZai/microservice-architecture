// pages/api/auth/signup.js
// import User from "../../../models/User";
import bcrypt from "bcryptjs";
import User from "@/model/User";
import dbConnect from "@/utils/dbconnect";

export default async (req, res) => {
  await dbConnect();

  if (req.method === "POST") {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: "User created" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
