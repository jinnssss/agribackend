const ProductPassport = require('../models/ProductPassport');

exports.getAllProductPassports = async (req, res) => {
  try {
    const passports = await ProductPassport.find();
    res.json(passports);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve product passports' });
  }
};

exports.createProductPassport = async (req, res) => {
  const { name, credentials, date } = req.body;
  try {
    const newPassport = new ProductPassport({ name, credentials, date });
    await newPassport.save();
    res.status(201).json(newPassport);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create product passport' });
  }
};

exports.getProductPassportById = async (req, res) => {
  try {
    const passport = await ProductPassport.findById(req.params.id);
    if (!passport) {
      return res.status(404).json({ message: 'Product passport not found' });
    }
    res.json(passport);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve product passport' });
  }
};

exports.updateProductPassport = async (req, res) => {
  try {
    const updatedPassport = await ProductPassport.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPassport) {
      return res.status(404).json({ message: 'Product passport not found' });
    }
    res.json(updatedPassport);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update product passport' });
  }
};

exports.deleteProductPassport = async (req, res) => {
  try {
    const deletedPassport = await ProductPassport.findByIdAndDelete(req.params.id);
    if (!deletedPassport) {
      return res.status(404).json({ message: 'Product passport not found' });
    }
    res.json({ message: 'Product passport deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete product passport' });
  }
};
