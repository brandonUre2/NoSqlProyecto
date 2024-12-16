// src/controllers/puestoController.js
const puestoService = require('../services/puestoService');
 
class puestoController {
 
  async listaPuestos(req, res) {
    try {
      const puestos = await puestoService.listaPuestos(); 
      res.render('puesto/listaPuestos', { puestos });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }


  async createPuesto(req, res) {
    try {
      const puesto = await puestoService.createPuesto(req.body);
      res.redirect('/api/puesto/listaPuestos');
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
 
 
  async deletePuesto(req, res) {
    try {
      const puestoId = req.params.id;
      await puestoService.deletePuesto(puestoId);
      res.redirect('/api/puesto/listaPuestos'); 
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

 
module.exports = new puestoController();