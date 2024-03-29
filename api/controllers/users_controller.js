const User = require('../models/users').userModel;
var jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password});
    const savedUser = await newUser.save();

    //Starting Authorization Piece
    const token = jwt.sign({email: req.body.email}, 'user', { expiresIn: '1h' }); // creating a token

    res.send({token: token, id:savedUser._id}); //sends back authorization response
    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// exports.getUserById = async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const user = await User.findById(userId);
//     if (!user) throw new Error('User not found');
//     res.json(user);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };