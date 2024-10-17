const Settings = require('../models/settings.model');

exports.getSettings = async (req, res) => {
  try {
    const settings = await Settings.findOne();
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching settings', error });
  }
};

exports.updateSettings = async (req, res) => {
  const updateData = req.body;
  try {
    const settings = await Settings.findOneAndUpdate({}, updateData, { new: true });
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ message: 'Error updating settings', error });
  }
};
