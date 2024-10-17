const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { protect } = require('../middleware/authMiddleware');
const { register, login, getUser } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/user', protect, getUser);
router.get('/logout', (req, res) => {
  res.clearCookie('authToken');
  res.json({ message: 'Logged out' });
});

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login', session: true }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user._id },
      process.env.JWT_SECRET, 
      { expiresIn: '30d' } 
    );

    res.cookie('authToken', token, {
      httpOnly: false, 
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'Lax', 
      maxAge: 30 * 24 * 60 * 60 * 1000, 
    });

    res.redirect('http://localhost:5173/dashboard');
  }
);

module.exports = router;
