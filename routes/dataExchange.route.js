const express = require('express');
const { getDataExchanges, createDataExchange } = require('../controllers/dataExchange.controller');
const router = express.Router();

router.get('/', getDataExchanges);
router.post('/', createDataExchange);

module.exports = router;
