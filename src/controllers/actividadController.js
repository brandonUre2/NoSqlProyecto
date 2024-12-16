// src/controllers/actividadController.js
const actividadService = require('../services/actividadService');
 
class actividadController {
 

  async listaActividades(req, res) {
    try {
      const actividades = await actividadService.listaActicidades(); 
      res.render('actividad/listaActividades', { actividades });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async createActividad(req, res) {
    try {
      const actividad = await actividadService.createActividad(req.body);
      res.redirect('/api/actividad/listaActividades');
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async getActividad(req, res) {
    try {
      const actividad = await actividadService.getActividad(req.params.id);
      if (!actividad) {
        return res.status(404).json({ error: 'Actividad not found' });
      }
      res.json(actividad);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async updateActividad(req, res) {
    try {
        const actividad = await actividadService.updateActividad(req.params.id, req.body);
        if (!actividad) {
            return res.status(404).send('Actividad no encontrada');
        }
        res.redirect('/api/actividad/listaActividades');  
    } catch (err) {
        res.status(500).send(err.message);
    }
}

 
  async deleteActividad(req, res) {
    try {
      const IdActividad = req.params.id;
      await actividadService.deleteActividad(IdActividad);
      res.redirect('/api/actividad/listaActividades');
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
 
module.exports = new actividadController();