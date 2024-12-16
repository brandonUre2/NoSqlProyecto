//src/models/usuario.js

 const mongoose = require('mongoose');
const UsuarioSchema=new mongoose.Schema({
    Id:{type:String},
    Nombre: {type:String},
    Correo: {type:String},
    Password: {type:String},
    Telefono: {type:String},
    Admin: {type:Boolean},
}, {collection: 'Usuarios'});

module.exports =mongoose.model('Usuarios', UsuarioSchema);