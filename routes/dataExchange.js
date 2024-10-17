const express = require('express');
const router = express.Router();
const { getAllDataExchanges, createDataExchange } = require('../controllers/dataExchangeController');

router.get('/', getAllDataExchanges);
router.post('/', createDataExchange);

module.exports = router;
