const User = require('../models/users');

// const getUser = async (req, res) => {
//     return res.status(200).json({
//       success: true,
//       message: 'API is working.'
//     });
//   }
  
//   module.exports = {
//     getUser,
//   };
exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password});
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) throw new Error('User not found');
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
