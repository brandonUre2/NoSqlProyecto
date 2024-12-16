// src/controllers/ciudadController.js
const ciudadService = require('../services/ciudadService');
 
class ciudadController {
 
  async listaCiudades(req, res) {
    try {
      const ciudades = await ciudadService.listaCiudades(); 
      res.render('ciudad/listaCiudades', { ciudades });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async createCiudad(req, res) {
    try {
      const ciudad = await ciudadService.createCiudad(req.body);
      res.redirect('/api/ciudad/listaCiudades');
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
 
  async deleteCiudad(req, res) {
    try {
      const ciudadId=req.params.id;
      await ciudadService.deleteCiudad(ciudadId);
      res.redirect('/api/ciudad/listaCiudades');
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
 
module.exports = new ciudadController();