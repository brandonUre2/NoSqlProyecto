// src/routes/consultaRoutes.js
const express = require('express');
const router = express. Router();
const consultaController = require('../controllers/consultaController');
router.get('/consulta/crearConsulta', (req, res) => {
    res.render('consulta/crearConsulta'); 
});
router.post('/consulta/crearConsulta', consultaController.createConsulta);
router.get('/consulta/responderConsulta/:id', consultaController.renderUpdateConsulta);
router.get('/consulta/listaConsultas', consultaController.listaConsultas);
router.get('/consulta/consultasUsuario/:idUsuario', consultaController.listaConsultasUsuario);
router.post('/consulta/responderConsulta/:id', consultaController.updateConsulta);
router.post('/consulta/eliminar/:id', consultaController.deleteConsulta);
router.post('/consulta/eliminar2/:id', consultaController.deleteConsulta2);
 
module.exports = router;