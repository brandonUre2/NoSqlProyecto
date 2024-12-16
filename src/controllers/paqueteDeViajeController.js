// src/controllers/paqueteDeViajeController.js

const paqueteDeViajeService = require('../services/paqueteDeViajeService');
const paqueteDeViaje = require('../models/paqueteDeViaje');
const Ciudad = require('../models/ciudad'); 
const Transporte = require('../models/transporte');
const Actividad = require('../models/actividad');
const ciudadService = require('../services/ciudadService');
const transporteService = require('../services/transporteService');
const actividadService = require('../services/actividadService');

class paqueteDeViajeController {
  
  async renderCreateForm(req, res) {
    try {
      const ciudades = await ciudadService.listaCiudades();
      const transportes = await transporteService.listaTransportes();
      const actividades = await actividadService.listaActicidades();

      res.render('paqueteDeViaje/crearPaqueteDeViaje', {
        ciudades,
        transportes,
        actividades
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async createPaqueteDeViaje(req, res) {
    try {
      const isActive = req.body.activo === 'on';  
      req.body.activo = isActive;

      const nuevoPaquete = await paqueteDeViajeService.createPaqueteDeViaje({
        Id: req.body.Id,
        Nombre: req.body.Nombre,
        Descripcion: req.body.Descripcion,
        precio: req.body.precio,
        Id_ciudad: req.body.Id_ciudad,
        Id_transporte: req.body.Id_transporte,
        Id_actividad1: req.body.Id_actividad1,
        Id_actividad2: req.body.Id_actividad2,
        activo: req.body.activo 
      });

      res.redirect('/api/paqueteDeViaje/lista');
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async editarPaqueteDeViaje(req, res) {
    try {
      const paquete = await paqueteDeViajeService.getPaqueteDeViaje(req.params.id);
      if (!paquete) {
        return res.status(404).json({ error: 'Paquete no encontrado' });
      }

      const ciudades = await Ciudad.find();
      const transportes = await Transporte.find();
      const actividades = await Actividad.find();

      res.render('paqueteDeViaje/editarPaqueteDeViaje', {
        paquete,
        ciudades,
        transportes,
        actividades
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async actualizarPaqueteDeViaje(req, res) {
    try {
        const isActive = req.body.activo === 'on';  
        req.body.activo = isActive;

        const updatedPaquete = await paqueteDeViajeService.updatePaqueteDeViaje(req.params.id, req.body);
        if (!updatedPaquete) {
            return res.status(404).json({ error: 'Paquete no encontrado' });
        }
        res.redirect('/api/paqueteDeViaje/lista');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  }

  async listaPaquetes(req, res) {
    try {
      const paquetes = await paqueteDeViaje.find();

      const ciudades = await Ciudad.find();
      const transportes = await Transporte.find();
      const actividades = await Actividad.find();

      const paquetesConNombres = paquetes.map(paquete => ({
        ...paquete._doc,
        ciudadNombre: ciudades.find(c => c.Id === paquete.Id_ciudad)?.Nombre || 'N/A',
        transporteNombre: transportes.find(t => t.Id === paquete.Id_transporte)?.Nombre || 'N/A',
        actividad1Nombre: actividades.find(a => a.Id === paquete.Id_actividad1)?.Nombre || 'N/A',
        actividad2Nombre: actividades.find(a => a.Id === paquete.Id_actividad2)?.Nombre || 'N/A',
      }));

      if (!Array.isArray(paquetes)) {
        return res.status(400).json({ error: 'Los paquetes no son un array' });
      }

      res.render('paqueteDeViaje/listaPaquetes', { paquetes: paquetesConNombres });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deletePaqueteDeViaje(req, res) {
    try {
      const paqueteDeViaje = await paqueteDeViajeService.deletePaqueteDeViaje(req.params.id);
      if (!paqueteDeViaje) {
        return res.status(404).json({ error: 'PaqueteDeViaje not found' });
      }
      res.redirect('/api/paqueteDeViaje/lista');
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }


async listaPaquetesActivos(req, res) {
  try {
      const paquetesActivos = await paqueteDeViajeService.catalogoViajes();

      const ciudades = await Ciudad.find();
      const transportes = await Transporte.find();
      const actividades = await Actividad.find();

      const paquetesConNombres = paquetesActivos.map(paquete => ({
          ...paquete._doc,
          ciudadNombre: ciudades.find(c => c.Id === paquete.Id_ciudad)?.Nombre || 'N/A',
          transporteNombre: transportes.find(t => t.Id === paquete.Id_transporte)?.Nombre || 'N/A',
          actividad1Nombre: actividades.find(a => a.Id === paquete.Id_actividad1)?.Nombre || 'N/A',
          actividad2Nombre: actividades.find(a => a.Id === paquete.Id_actividad2)?.Nombre || 'N/A',
      }));

      res.render('paqueteDeViaje/catalogoViajes', { paquetes: paquetesConNombres });
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
}
}


module.exports = new paqueteDeViajeController();
