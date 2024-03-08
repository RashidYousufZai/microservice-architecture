const express = require("express");
const router = express.Router();
const authController = require("../controllers/userController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/secretKey", authController.getUserBySecretKey);

module.exports = router;
