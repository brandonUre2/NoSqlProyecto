//src/models/puesto.js

 const mongoose = require('mongoose');
const PuestoSchema=new mongoose.Schema({
    Id:{type:Number},
    Nombre: {type:String},
    Descripcion: {type:String},
}, {collection: 'Puestos'});

module.exports =mongoose.model('Puestos', PuestoSchema);