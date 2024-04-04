const express = require('express');
const { loginUser } = require('../routes/loginRoute'); 
const router = express.Router();

router.post("/login", loginUser);
// router.get("/current", validateToken, currentUser);

module.exports = router;

