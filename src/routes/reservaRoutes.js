// src/routes/reservaRoutes.js
const express = require('express');
const router = express. Router();
const reservaController = require('../controllers/reservaController');
 
router.post('/reserva/reservar/:idPaquete', reservaController.crearReserva);
router.get('/reservas/:id', reservaController.getReserva);
router.get('/reserva/listaReservas', reservaController.listaReservas);
router.get('/reserva/listaReservasUsuario/:idUsuario', reservaController.listaReservasUsuario);
router.post('/reserva/eliminar/:id', reservaController.deleteReserva);
router.post('/reserva/eliminar2/:id', reservaController.deleteReserva2);
 
module.exports = router;