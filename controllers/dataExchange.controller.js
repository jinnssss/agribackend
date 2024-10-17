const DataExchange = require('../models/dataExchange.model');

exports.getDataExchanges = async (req, res) => {
  try {
    const dataExchanges = await DataExchange.find();
    res.status(200).json(dataExchanges);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data exchanges', error });
  }
};

exports.createDataExchange = async (req, res) => {
  const { name, status, progress } = req.body;
  try {
    const newExchange = new DataExchange({ name, status, progress });
    await newExchange.save();
    res.status(201).json(newExchange);
  } catch (error) {
    res.status(500).json({ message: 'Error creating data exchange', error });
  }
};
