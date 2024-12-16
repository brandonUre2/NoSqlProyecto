//src/models/paqueteDeViaje.js

 const mongoose = require('mongoose');
const PaqueteDeViajeSchema=new mongoose.Schema({
    Id:{type:Number},
    Nombre: {type:String},
    Descripcion: {type:String},
    precio:{type:Number},
    Id_ciudad:{type:Number},
    Id_transporte:{type:Number},
    Id_actividad1:{type:Number},
    Id_actividad2:{type:Number},
    activo:{type:Boolean},
}, {collection: 'PaqueteDeViajes'});

module.exports =mongoose.model('PaqueteDeViajes', PaqueteDeViajeSchema);