const express = require('express');
const { getAllUsers, getUserById, updateUserRole, deleteUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/roleMiddleware');
const router = express.Router();

router.get('/', protect, admin, getAllUsers);
router.get('/:id', protect, admin, getUserById);
router.put('/:id/role', protect, admin, updateUserRole);
router.delete('/:id', protect, admin, deleteUser);

module.exports = router;
