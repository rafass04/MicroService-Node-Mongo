const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  interesse: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
