// src/routes/hospedajeRoutes.js
const express = require('express');
const router = express. Router();
const hospedajeController = require('../controllers/hospedajeController');


router.get('/hospedaje/listahospedajes', hospedajeController.listaHospedajes);
router.get('/hospedaje/crear', hospedajeController.renderCreateForm);
router.post('/hospedaje/crear', hospedajeController.createHospedaje);
router.post('/hospedaje/eliminar/:id', hospedajeController.deleteHospedaje);
 
module.exports = router;