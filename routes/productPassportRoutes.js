const express = require('express');
const router = express.Router();
const {
  getAllProductPassports,
  createProductPassport,
  getProductPassportById,
  updateProductPassport,
  deleteProductPassport,
} = require('../controllers/productPassportController');

router.get('/', getAllProductPassports);

router.post('/', createProductPassport);

router.get('/:id', getProductPassportById);

router.put('/:id', updateProductPassport);

router.delete('/:id', deleteProductPassport);

module.exports = router;
