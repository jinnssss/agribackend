const express = require('express');
const router = express.Router();
const { getRecentActions } = require('../controllers/actionsController');

router.get('/recent', getRecentActions);

module.exports = router;
