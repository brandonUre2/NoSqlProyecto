// src/controllers/transporteController.js
const transporteService = require('../services/transporteService');
 
class transporteController {
 
  async listaTransportes(req, res) {
    try {
      const transportes = await transporteService.listaTransportes(); 
      res.render('transporte/listaTransportes', { transportes });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async createTransporte(req, res) {
    try {
      const transporte = await transporteService.createTransporte(req.body);
      res.redirect('/api/transporte/listaTransportes')
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async getTransporte(req, res) {
    try {
      const transporte = await transporteService.getTransporte(req.params.id);
      if (!transporte) {
        return res.status(404).json({ error: 'Transporte not found' });
      }
      res.json(transporte);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async updateTransporte(req, res) {
    try {
      const transporte = await transporteService.updateTransporte(req.params.id, req.body);
      if (!transporte) {
        return res.status(404).json({ error: 'Transporte not found' });
      }
      res.json(transporte);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async deleteTransporte(req, res) {
    try {
      const transporte = await transporteService.deleteTransporte(req.params.id);
      if (!transporte) {
        return res.status(404).json({ error: 'Transporte not found' });
      }
      res.redirect('/api/transporte/listaTransportes')
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
 
module.exports = new transporteController();