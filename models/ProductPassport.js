const mongoose = require('mongoose');

const productPassportSchema = new mongoose.Schema({
  name: { type: String, required: true },
  credentials: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ProductPassport', productPassportSchema);
