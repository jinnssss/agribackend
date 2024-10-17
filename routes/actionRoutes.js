const express = require('express');
const { logAction, getAllActions, getActionsByUser } = require('../controllers/actionController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, logAction);
router.get('/', protect, getAllActions);
router.get('/user/:userId', protect, getActionsByUser);

module.exports = router;
