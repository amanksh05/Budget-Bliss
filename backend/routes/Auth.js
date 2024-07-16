const express = require('express');
const router = express.Router();
const { registerUser, loginUser, userInfo } = require('../controllers/Auth');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/profile', userInfo); 

module.exports = router;
