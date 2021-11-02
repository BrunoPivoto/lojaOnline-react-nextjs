const Loja = require('/home')

Loja.methods(['get','post', 'put', 'delete'])

Loja.updateOptions({new: true, runValidators: true})

module.exports = Loja

