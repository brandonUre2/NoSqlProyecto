// src/routes/resenaRoutes.js
const express = require('express');
const router = express. Router();
const resenaController = require('../controllers/resenaController');
 
router.get('/resenas/:id', resenaController.getResena);
router.get('/resena/listaResenas', resenaController.listaResenas);
router.get('/resena/listaResenasUsuario/:idUsuario', resenaController.listaResenasUsuario);

router.put('/resenas/:id', resenaController.updateResena);
router.post('/resena/eliminar/:id', resenaController.deleteResena);

router.get('/resena/crearResena', resenaController.renderCreateResena);
router.post('/resena/crearResena', resenaController.crearResena);
 
module.exports = router;