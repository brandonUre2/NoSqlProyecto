// src/routes/transporteRoutes.js
const express = require('express');
const router = express. Router();
const transporteController = require('../controllers/transporteController');
router.get('/transporte/crear', (req, res) => {
    res.render('transporte/crearTransporte'); 
});

router.post('/transporte/crear', transporteController.createTransporte);
router.get('/transporte/listaTransportes', transporteController.listaTransportes);
router.get('/transportes/:id', transporteController.getTransporte);
router.put('/transportes/:id', transporteController.updateTransporte);
router.post('/transporte/eliminar/:id', transporteController.deleteTransporte);
 
module.exports = router;