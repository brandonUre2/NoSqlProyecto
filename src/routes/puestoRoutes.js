// src/routes/puestoRoutes.js
const express = require('express');
const router = express. Router();
const puestoController = require('../controllers/puestoController');
router.get('/puesto/crear', (req, res) => {
    res.render('puesto/crearPuesto'); 
});

router.post('/puesto/crear', puestoController.createPuesto);
router.get('/puesto/listaPuestos', puestoController.listaPuestos); 
router.post('/puesto/eliminar/:id', puestoController.deletePuesto);
 
module.exports = router;