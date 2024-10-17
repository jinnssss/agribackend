const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    const user = await User.create({ name, email, password });
    const token = generateToken(user._id);
    res.cookie('token', token, { httpOnly: true });
    res.status(201).json({ token });
  } catch (error) {
    console.error("Error during registration:", error); 
    res.status(400).json({ message: 'Registration failed', error: error.message }); // Send error message
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = generateToken(user._id);
    res.cookie('token', token, { httpOnly: true });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Login failed' });
  }
};

exports.getUser = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
};
