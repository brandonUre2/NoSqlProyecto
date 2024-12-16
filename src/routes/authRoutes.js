const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); 

router.get('/auth/register', authController.mostrarRegistro);

router.post('/auth/register', authController.registrarUsuario);

router.get('/auth/login', authController.mostrarLogin);

router.post('/auth/login', authController.iniciarSesion);

router.get('/auth/logout', authController.cerrarSesion);

module.exports = router; 
