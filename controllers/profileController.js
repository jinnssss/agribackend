const User = require('../models/User');

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await User.findById(req.user.id);
    user.name = name || user.name;
    user.email = email || user.email;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Profile update failed' });
  }
};
