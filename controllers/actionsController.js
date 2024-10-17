const Action = require('../models/actions.model');

exports.getRecentActions = async (req, res) => {
  try {
    const actions = await Action.find().sort({ time: -1 }).limit(10);
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recent actions', error });
  }
};
