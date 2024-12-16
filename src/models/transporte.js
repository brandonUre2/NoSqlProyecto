//src/models/transporte.js

 const mongoose = require('mongoose');
const TrasporteSchema=new mongoose.Schema({
    Id:{type:Number},
    Nombre: {type:String},
    Tipo:{type:String},
    Empresa:{type:String},
}, {collection: 'Transportes'});

module.exports =mongoose.model('Transportes', TrasporteSchema);