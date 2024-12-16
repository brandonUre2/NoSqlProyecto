//src/models/hospedaje.js

 const mongoose = require('mongoose');
const HospedajeSchema=new mongoose.Schema({
    Nombre: {type:String},
    Id_ciudad:{type:Number},
    Empresa:{type:String},
}, {collection: 'Hospedajes'});

module.exports =mongoose.model('Hospedajes', HospedajeSchema);