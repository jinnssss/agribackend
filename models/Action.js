const mongoose = require('mongoose');

const actionSchema = new mongoose.Schema({
  actionName: { type: String, required: true },
  status: { type: String, required: true },
  time: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Action', actionSchema);
