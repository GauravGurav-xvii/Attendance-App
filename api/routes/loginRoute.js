const express = require('express');
const { loginUser ,currentUser } = require('../routes/loginRoute'); 

const validateToken = require("../middleware/validationTokenHandler");

const router = express.Router();
router.get("/current", validateToken, currentUser);

router.post("/login", loginUser);

module.exports = router;

