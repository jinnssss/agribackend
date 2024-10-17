const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  customer: { type: String, required: true },
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
});

module.exports = mongoose.model('Product', productSchema);
