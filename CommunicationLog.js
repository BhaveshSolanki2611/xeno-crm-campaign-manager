const db = require('./db');

const createCommLogTable = `
  CREATE TABLE IF NOT EXISTS communications_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customerId INT,
    message TEXT,
    status VARCHAR(20),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`;

db.query(createCommLogTable, (err) => {
  if (err) throw err;
  console.log('Communications log table created');
});

module.exports = db;
