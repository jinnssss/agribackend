const Report = require('../models/reports.model');

exports.getReports = async (req, res) => {
  try {
    const reports = await Report.findOne().sort({ createdAt: -1 }); 
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch reports', error });
  }
};

exports.createReport = async (req, res) => {
  const { totalCredentials, totalProducts, dataExchanges, totalUsers, totalProductPassports } = req.body;

  try {
    const newReport = await Report.create({
      totalCredentials,
      totalProducts,
      dataExchanges,
      totalUsers,
      totalProductPassports,
    });
    res.status(201).json(newReport);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create report', error });
  }
};
