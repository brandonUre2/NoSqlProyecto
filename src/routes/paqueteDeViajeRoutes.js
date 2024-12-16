// src/routes/paqueteDeViajeRoutes.js
const express = require('express');
const router = express. Router();
const paqueteDeViajeController = require('../controllers/paqueteDeViajeController');

router.get('/paqueteDeViaje/lista', paqueteDeViajeController.listaPaquetes);
router.get('/paqueteDeViaje/catalogo', paqueteDeViajeController.listaPaquetesActivos);

router.post('/paqueteDeViajes', paqueteDeViajeController.createPaqueteDeViaje);
router.post('/paqueteDeViaje/eliminar/:id', paqueteDeViajeController.deletePaqueteDeViaje);
router.get('/paqueteDeViaje/editar/:id', paqueteDeViajeController.editarPaqueteDeViaje);

router.post('/paqueteDeViaje/editar/:id', paqueteDeViajeController.actualizarPaqueteDeViaje);
router.get('/paqueteDeViaje/crear', paqueteDeViajeController.renderCreateForm);

router.post('/paqueteDeViaje/crear', paqueteDeViajeController.createPaqueteDeViaje);
 
module.exports = router;