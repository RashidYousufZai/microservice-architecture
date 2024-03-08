const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/patientController");

router.post("/register", doctorController.signup);
router.post("/login", doctorController.login);

module.exports = router;
