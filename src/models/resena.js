//src/models/resena.js
const mongoose = require('mongoose');

const ResenaSchema = new mongoose.Schema({
    Id_usuario: { type: String },
    Id_paquete: { type: Number },
    mensaje: { type: String },  
    valoracion: { 
        type: Number,
        min: 1,  
        max: 10
    }
}, { collection: 'Resenas' });

module.exports = mongoose.model('Resenas', ResenaSchema);
