//src/models/consulta.js
const mongoose = require('mongoose');

const ConsultaSchema = new mongoose.Schema({
    Id_usuario: { type: String },
    consulta: { type: String },
    respuesta:{type:String},
}, { collection: 'Consultas' });

module.exports = mongoose.model('Consultas', ConsultaSchema);
