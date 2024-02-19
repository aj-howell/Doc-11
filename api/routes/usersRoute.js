const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users_controller');


// router.get('/', UserController.getUser);
// router.post("/", UserController.getUser); // create a new user
// router.get('/:user_id', UserController.getUser); 
// router.delete('/:user_id', UserController.getUsert); 

//   POST /users - Create a new user
router.post('/', UserController.createUser);

// GET /users/:id - Get user by ID
//router.get('/:id', UserController.getUserById); no need to get user directly

 
module.exports = router;

