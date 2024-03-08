const express = require("express");
const router = express.Router();
const authController = require("../controllers/RegistereduserController");

router.get("/secretKey", authController.getUserBySecretKey);

module.exports = router;
