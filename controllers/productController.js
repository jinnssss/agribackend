const Product = require('../models/Product');
const mongoose = require('mongoose');

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.createProduct = async (req, res) => {
  const { name, customer, date, amount } = req.body;
  const product = await Product.create({ name, customer, date, amount });
  res.json(product);
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid product ID format.' });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  product.name = req.body.name || product.name;
  product.customer = req.body.customer || product.customer;
  product.date = req.body.date || product.date;
  product.amount = req.body.amount || product.amount;
  await product.save();
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
};
