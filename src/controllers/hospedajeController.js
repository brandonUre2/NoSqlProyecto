// src/controllers/hospedajeController.js
const hospedajeService = require('../services/hospedajeService');
const ciudadService = require('../services/ciudadService');
 
class hospedajeController {
 

  async listaHospedajes(req, res) {
    try {
      const hospedajes = await hospedajeService.listaHospedajes(); 
      res.render('hospedaje/listaHospedajes', { hospedajes });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
 
  async renderCreateForm(req, res) {
    try {
      const ciudades = await ciudadService.listaCiudades();  
      res.render('hospedaje/crearHospedaje', { ciudades });  
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async createHospedaje(req, res) {
    try {
      const hospedaje = await hospedajeService.createHospedaje(req.body);
      res.redirect('/api/hospedaje/listaHospedajes');  
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

 


 
  async deleteHospedaje(req, res) {
    try {
      const hospedaje = await hospedajeService.deleteHospedaje(req.params.id);
      res.redirect('/api/hospedaje/listaHospedajes'); 
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
 
module.exports = new hospedajeController();