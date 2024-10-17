const mongoose = require('mongoose');

const actionSchema = new mongoose.Schema({
  actionName: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['Success', 'Error', 'Pending'], 
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});


const Action = mongoose.models.Action || mongoose.model('Action', actionSchema);

module.exports = Action;
