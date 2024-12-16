//src/models/reserva.js

 const mongoose = require('mongoose');
const ReservaSchema=new mongoose.Schema({
    Id_usuario:{type:String},
    Id_paquete:{type:Number},
}, {collection: 'Reservas'});

module.exports =mongoose.model('Reservas', ReservaSchema);