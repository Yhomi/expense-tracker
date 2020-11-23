const express = require('express');
const transactionController = require('../controllers/TransactionController');

const router = express.Router();

router.get('/',transactionController.getTransactions);

router.post('/',transactionController.addTransactions);

router.delete('/:id',transactionController.deleteTransactions);

module.exports = router;