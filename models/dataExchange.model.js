const mongoose = require('mongoose');

const dataExchangeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
  progress: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('DataExchange', dataExchangeSchema);
