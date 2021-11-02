const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true},
    preco: {type: Boolean, required: true, default: false},
    dataCompra: {type: Date, default: Date.now}
})

module.exports = restful.model('Loja', lojaSchema)