const express = require('express');
const router = express.Router();

const UserController = require('..\controllers\authorization_controller.js');


router.post('/', AuthorizationController.login);


module.exports = router;