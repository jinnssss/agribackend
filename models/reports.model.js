const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  totalCredentials: { type: Number, default: 0 },
  totalProducts: { type: Number, default: 0 },
  dataExchanges: { type: Number, default: 0 },
  totalUsers: { type: Number, default: 0 },
  totalProductPassports: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Report', reportSchema);
