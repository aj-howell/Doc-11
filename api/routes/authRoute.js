const express = require('express');
const router = express.Router();

const authController = require('../controllers/authorization_controller.js');


router.post('/', authController.login);


module.exports = router;