const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Item Routes
router.get('/items', itemController.getAllItems);

module.exports = router;
