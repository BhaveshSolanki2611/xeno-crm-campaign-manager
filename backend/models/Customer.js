const db = require('./db');

const createCustomerTable = `
  CREATE TABLE IF NOT EXISTS customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    totalSpending DECIMAL(10, 2),
    visits INT,
    lastVisit DATE
  )`;

db.query(createCustomerTable, (err) => {
  if (err) throw err;
  console.log('Customer table created');
});
