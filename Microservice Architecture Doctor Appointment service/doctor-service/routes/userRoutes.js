const express = require("express");
const router = express.Router();
const authController = require("../controllers/userController");

router.get("/secretKey", authController.getUserBySecretKey);

module.exports = router;
