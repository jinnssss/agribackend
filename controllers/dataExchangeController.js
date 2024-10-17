const DataExchange = require('../models/DataExchange');

exports.getAllDataExchanges = async (req, res) => {
  try {
    const exchanges = await DataExchange.find();
    res.json(exchanges);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve data exchanges' });
  }
};

exports.createDataExchange = async (req, res) => {
  const { name, status, date } = req.body;
  try {
    const exchange = new DataExchange({ name, status, date });
    await exchange.save();
    res.status(201).json(exchange);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create data exchange' });
  }
};
