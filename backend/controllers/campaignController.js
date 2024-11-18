const pool = require('../models/db');

exports.sendMessage = (req, res) => {
  const { message, audience } = req.body;

  // Validate input
  if (!message || !audience || !Array.isArray(audience) || audience.length === 0) {
    return res.status(400).json({ error: 'Invalid input: message and audience are required' });
  }

  // Prepare query for inserting messages into the communications_log table
  const query = 'INSERT INTO communications_log (customerId, message, status) VALUES ?';
  const values = audience.map(customer => [
    customer.id,
    message,
    Math.random() < 0.9 ? 'SENT' : 'FAILED'
  ]);

  // Use the connection pool to execute the query
  pool.query(query, [values], (err, results) => {
    if (err) {
      console.error('Error inserting logs:', err);
      return res.status(500).json({ error: 'Failed to send messages' });
    }

    res.status(200).json({
      message: 'Messages sent successfully',
      totalSent: results.affectedRows
    });
  });
};
