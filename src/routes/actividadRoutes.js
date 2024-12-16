// src/routes/actividadRoutes.js
const express = require('express');
const router = express. Router();
const actividadController = require('../controllers/actividadController');
const actividadService = require('../services/actividadService');


router.get('/actividad/crear', (req, res) => {
    res.render('actividad/crearActividad'); 
});

 
router.post('/actividad/crear', actividadController.createActividad);
router.get('/actividades/:id', actividadController.getActividad);
router.get('/actividad/listaActividades', actividadController.listaActividades);
router.get('/actividad/editar/:id', async (req, res) => {
    try {
        const actividad = await actividadService.getActividad(req.params.id);
        if (!actividad) {
            return res.status(404).send('Actividad no encontrada');
        }
        res.render('actividad/editarActividad', { actividad });
    } catch (err) {
        res.status(500).send(err.message);
    }
});
  router.post('/actividad/editar/:id', actividadController.updateActividad);
  router.post('/actividad/eliminar/:id', actividadController.deleteActividad);
 
module.exports = router;