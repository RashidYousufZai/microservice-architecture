const express = require("express");
const userController = require("../controllers/userController");
const authenticate = require("../middleware/auth");
const router = express.Router();

router.post("/signup", authenticate, userController.signup);
router.post("/login", authenticate, userController.login);

module.exports = router;
