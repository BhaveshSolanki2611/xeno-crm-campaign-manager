const express = require('express');
const { addCustomer } = require('../controllers/customerController');
const router = express.Router();

router.post('/add', addCustomer);

module.exports = router;
