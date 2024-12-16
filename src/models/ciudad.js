//src/models/ciudad.js

 const mongoose = require('mongoose');
const CiudadSchema=new mongoose.Schema({
    Id:{type:Number},
    Nombre: {type:String},
}, {collection: 'Ciudades'});

module.exports =mongoose.model('Ciudades', CiudadSchema);