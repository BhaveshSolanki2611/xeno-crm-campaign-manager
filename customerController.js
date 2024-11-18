const pool = require('../models/db');

exports.addCustomer = (req, res) => {
  const { name, email, totalSpending, visits, lastVisit } = req.body;

  // Validate input 
  if (!name || !email || !totalSpending || visits === undefined || !lastVisit) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO customers SET ?';
  const values = { name, email, totalSpending, visits, lastVisit };

  pool.query(query, values, (err, results) => {
    if (err) {
      console.error('Error adding customer:', err);
      return res.status(500).json({ error: 'Failed to add customer' });
    }

    res.status(201).json({
      message: 'Customer added successfully',
      customerId: results.insertId
    });
  });
};
