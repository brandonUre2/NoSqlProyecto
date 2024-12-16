// src/routes/empleadoRoutes.js
const express = require('express');
const router = express. Router();
const empleadoController = require('../controllers/empleadoController');
 
router.post('/empleado/crear', empleadoController.createEmpleado);
router.get('/empleado/crear', empleadoController.renderCreateForm);
router.get('/empleados/:id', empleadoController.getEmpleado);
router.get('/empleado/listaEmpleados', empleadoController.listaEmpleados);

router.get('/empleados/:id', empleadoController.getEmpleado);
router.get('/empleado/editar/:id', empleadoController.renderEditForm);
router.post('/empleado/editar/:id', empleadoController.updateEmpleado);
router.post('/empleado/eliminar/:id', empleadoController.deleteEmpleado);
 
module.exports = router;