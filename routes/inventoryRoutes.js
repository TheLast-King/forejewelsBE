// Inside inventoryRoutes.js
const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Inventory Routes
router.get('/inventories', inventoryController.getAllInventories);
router.post('/inventories', inventoryController.createInventory); // Route to create inventory

// Route to populate sample data
router.post('/populate-data', inventoryController.populateData);

module.exports = router;
