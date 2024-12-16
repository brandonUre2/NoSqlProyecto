//src/models/actividad.js

 const mongoose = require('mongoose');
const ActividadSchema=new mongoose.Schema({
    Id:{type:Number},
    Nombre: {type:String},
    Descripcion:{type:String},
}, {collection: 'Actividades'});

module.exports =mongoose.model('Actividades', ActividadSchema);