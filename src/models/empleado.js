//src/models/empleado.js

 const mongoose = require('mongoose');
const EmpleadoSchema=new mongoose.Schema({
    Id:{type:Number},
    Apellido: {type:String},
    salario: {type:Number},
    fechaContratacion: {type:Date},
    IdPuesto:{type:Number},
}, {collection: 'Empleados'});

module.exports =mongoose.model('Empleados', EmpleadoSchema);