// src/controllers/reservaController.js
const reserva = require('../models/reserva');
const usuario = require('../models/usuario');
const paqueteDeViaje = require('../models/paqueteDeViaje');


const reservaService = require('../services/reservaService');
 
class reservaController {
  async listaReservasUsuario(req, res){
    try{
      const { idUsuario } = req.params;
      const reservas = await reserva.find({Id_usuario:idUsuario}); 
      const paquetes = await paqueteDeViaje.find();
      const usuarios = await usuario.find();
      const reservasConNombres = reservas.map(reserva => ({
        ...reserva._doc,
        paqueteNombre: paquetes.find(p => p.Id === reserva.Id_paquete)?.Nombre || 'N/A',
        usuarioNombre: usuarios.find(u => u.Id === reserva.Id_usuario)?.Nombre || 'N/A',

      }));

      if (!Array.isArray(reservas)) {
        return res.status(400).json({ error: 'Las reservas no son un array' });
      }
      res.render('reserva/listaReservasUsuario', { reservas: reservasConNombres });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

 
  async listaReservas(req, res){
    try{
      const reservas = await reserva.find(); 
      const paquetes = await paqueteDeViaje.find();
      const usuarios = await usuario.find();
      const reservasConNombres = reservas.map(reserva => ({
        ...reserva._doc,
        paqueteNombre: paquetes.find(p => p.Id === reserva.Id_paquete)?.Nombre || 'N/A',
        usuarioNombre: usuarios.find(u => u.Id === reserva.Id_usuario)?.Nombre || 'N/A',

      }));

      if (!Array.isArray(reservas)) {
        return res.status(400).json({ error: 'Las reservas no son un array' });
      }
      res.render('reserva/listaReservas', { reservas: reservasConNombres });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }


  async crearReserva(req, res) {
      try {
        const { idPaquete } = req.params;
        const userId = req.session.usuarioId; 
  
        if (!userId) {
          return res.status(401).send('Usuario no autenticado');
        }
      const nuevaReserva = new reserva({
        Id_usuario: userId, 
        Id_paquete: idPaquete,
      });

      await nuevaReserva.save();
      res.redirect(`/api/reserva/listaReservasUsuario/${userId}`);
    } catch (err) {
      res.status(500).send('Error al crear la reserva: ' + err.message);
    }
  }

 
  async getReserva(req, res) {
    try {
      const reserva = await reservaService.getReserva(req.params.id);
      if (!reserva) {
        return res.status(404).json({ error: 'Reserva not found' });
      }
      res.json(reserva);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async updateReserva(req, res) {
    try {
      const reserva = await reservaService.updateReserva(req.params.id, req.body);
      if (!reserva) {
        return res.status(404).json({ error: 'Reserva not found' });
      }
      res.json(reserva);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async deleteReserva(req, res) {
    try {
      const reserva = await reservaService.deleteReserva(req.params.id);
      if (!reserva) {
        return res.status(404).json({ error: 'Reserva not found' });
      }
      res.redirect('/api/reserva/listaReservas');
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async deleteReserva2(req, res) {
    try {
      const userId = req.session.usuarioId; 
      const reserva = await reservaService.deleteReserva(req.params.id);
      if (!reserva) {
        return res.status(404).json({ error: 'Reserva not found' });
      }
      res.redirect(`/api/reserva/listaReservasUsuario/${userId}`);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
 
module.exports = new reservaController();