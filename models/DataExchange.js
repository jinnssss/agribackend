const mongoose = require('mongoose');

const dataExchangeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Approved', 'Declined', 'Error', 'Pending'],
    default: 'Pending',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  progress: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.models.DataExchange || mongoose.model('DataExchange', dataExchangeSchema);
