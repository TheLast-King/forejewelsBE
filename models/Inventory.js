const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  size: String,
  type: String,
  // subitems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
