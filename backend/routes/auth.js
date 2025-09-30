const express = require('express');
const router = express.Router();

// Import controllers
const { register, login } = require('../controllers/auth');

// Routes
router.post('/register', register);
router.post('/login', login);

module.exports = router;
