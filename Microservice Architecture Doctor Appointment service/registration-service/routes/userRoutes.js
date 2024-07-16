const express = require("express");
const router = express.Router();
const authController = require("../controllers/userController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/secretKey", authController.getUserBySecretKey);
router.get("/users/:userId", authController.getUserById);

module.exports = router;
