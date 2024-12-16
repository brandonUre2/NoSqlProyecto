const express = require('express');
const router = express. Router();
const ciudadController = require('../controllers/ciudadController');
router.get('/ciudad/crear', (req, res) => {
    res.render('ciudad/crearCiudad'); 
});

router.post('/ciudad/crear', ciudadController.createCiudad);
router.get('/ciudad/listaCiudades', ciudadController.listaCiudades);
router.post('/ciudad/eliminar/:id', ciudadController.deleteCiudad);
 
module.exports = router;