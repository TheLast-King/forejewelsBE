// Inside inventoryController.js
const Inventory = require('../models/Inventory');

// Inventory Controllers
const inventoryController = {
  getAllInventories: async (req, res) => {
    try {
      const inventories = await Inventory.find();
      res.json(inventories);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  
  createInventory: async (req, res) => {
    try {
      const { name, price, quantity, size, type } = req.body;
      const newInventory = new Inventory({
        name,
        price,
        quantity,
        size, 
        type,
      });
      const savedInventory = await newInventory.save();
      res.json(savedInventory);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  populateData: async (req, res) => {
    try {
      const sampleInventoryData = [
        {
          name: 'Necklace',
          price: 500,
          quantity: 10,
          size: 'sm',
          type: 'beads',
        },
        {
          name: 'Earrings',
          price: 200,
          quantity: 20,
          size: 'lg',
          type: 'Ear Rings',
        },
      ];

      await Inventory.insertMany(sampleInventoryData);
      res.json({ message: 'Sample data populated successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = inventoryController;
