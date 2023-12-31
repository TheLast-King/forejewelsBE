const Item = require('../models/Item');

// Item Controllers
const itemController = {
  getAllItems: async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = itemController;
