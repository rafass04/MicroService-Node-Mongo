const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  sobrenome: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
