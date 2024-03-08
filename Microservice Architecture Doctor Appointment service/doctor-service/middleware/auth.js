// const Doctor = require("../models/doctorModel");
// const rp = require("request-promise");

// const authenticate = async (req, res, next) => {
//   const secretKey = req.headers["secret-key"];
//   if (secretKey) {
//     try {
//       const response = await rp.get({
//         uri: "http://localhost:3000/auth/secretKey",
//         headers: {
//           "secret-key": secretKey,
//         },
//         json: true,
//       });

//       const { _id } = response.user;

//       if (_id) {
//         req.registrationId = _id; // Attach _id to the request object for later use
//         next(); // Call next middleware
//       } else {
//         res
//           .status(500)
//           .json({ error: "Registration ID not found in response" });
//       }
//     } catch (err) {
//       console.error("Error in authentication request:", err);
//       res.sendStatus(500);
//     }
//   } else {
//     res.status(404).json({ error: "Secret key not found" });
//   }
// };

// module.exports = authenticate;

const { userSchema } = require("../models/UserModel");

const authenticate = async (req, res, next) => {
  try {
    const secretKey = req.headers["secret-key"];
    if (!secretKey) {
      return res
        .status(400)
        .json({ message: "Secret key is missing in headers" });
    }

    const user = await userSchema.findOne({ secretKey }); // Using the User model
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.registrationId = user._id; // Attach _id to the request object for later use
    next(); // Call next middleware
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = authenticate;
