const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");
const authenticate = require("../middleware/auth");

router.post("/register", authenticate, doctorController.signup);
router.post("/login", authenticate, doctorController.login);
router.get("/:id", authenticate, doctorController.findDoctorById);
router.delete("/:id", authenticate, doctorController.deleteDoctorById);
router.put("/:id", authenticate, doctorController.updateDoctorById);

module.exports = router;
