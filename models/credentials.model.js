const mongoose = require('mongoose');

const credentialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Credential', credentialSchema);
