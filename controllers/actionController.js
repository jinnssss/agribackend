const Action = require('../models/Action');

exports.logAction = async (req, res) => {
  const { actionName, status, time } = req.body;

  try {
    const action = await Action.create({
      actionName,
      status,
      time,
      user: req.user._id, 
    });
    res.status(201).json(action);
  } catch (error) {
    res.status(400).json({ message: 'Action logging failed', error });
  }
};


exports.getAllActions = async (req, res) => {
  try {
    const actions = await Action.find();
    res.json(actions);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve actions', error });
  }
};

exports.getActionsByUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const actions = await Action.find({ user: userId });
    res.json(actions);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve actions for user', error });
  }
};
