const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

exports.updateUserRole = async (req, res) => {
  const user = await User.findById(req.params.id);
  user.role = req.body.role || user.role;
  await user.save();
  res.json(user);
};


exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
};
