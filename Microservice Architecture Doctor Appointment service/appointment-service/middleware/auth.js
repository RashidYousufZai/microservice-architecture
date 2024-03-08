const { userSchema } = require("../models/RrgistrationUserModel");

const authenticate = async (req, res, next) => {
  try {
    const secretKey = req.headers["secret-key"];
    if (!secretKey) {
      return res
        .status(400)
        .json({ message: "Secret key is missing in headers" });
    }

    const user = await userSchema.findOne({ secretKey });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.registrationId = user._id;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = authenticate;
