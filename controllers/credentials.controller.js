const Credential = require('../models/credentials.model');

exports.getCredentials = async (req, res) => {
  try {
    const credentials = await Credential.find();
    res.status(200).json(credentials);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching credentials', error });
  }
};

exports.createCredential = async (req, res) => {
  const { name, status } = req.body;
  try {
    const newCredential = new Credential({ name, status });
    await newCredential.save();
    res.status(201).json(newCredential);
  } catch (error) {
    res.status(500).json({ message: 'Error creating credential', error });
  }
};

exports.updateCredential = async (req, res) => {
  const { credentialId } = req.params;
  const updateData = req.body;
  try {
    const updatedCredential = await Credential.findByIdAndUpdate(credentialId, updateData, { new: true });
    res.status(200).json(updatedCredential);
  } catch (error) {
    res.status(500).json({ message: 'Error updating credential', error });
  }
};

exports.deleteCredential = async (req, res) => {
  const { credentialId } = req.params;
  try {
    await Credential.findByIdAndDelete(credentialId);
    res.status(200).json({ message: 'Credential deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting credential', error });
  }
};
