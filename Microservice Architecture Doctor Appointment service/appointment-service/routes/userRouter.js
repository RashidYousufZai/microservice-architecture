const express = require("express");
const appointmentController = require("../controllers/appointmentController");
const authenticate = require("../middleware/auth");
const router = express.Router();

router.post(
  "/appointments",
  authenticate,
  appointmentController.createAppointment
);
router.get(
  "/appointments",
  authenticate,
  appointmentController.getAppointments
);

router.post("/updatestatus", authenticate, appointmentController.updateStatus);

router.put(
  "/appointments/:appointmentId",
  authenticate,
  appointmentController.updateAppointment
);

module.exports = router;
