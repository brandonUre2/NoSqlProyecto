// src/controllers/consultaController.js
const consultaService = require('../services/consultaService');
const consulta= require ('../models/consulta')
const usuario=require('../models/usuario');
 
class consultaController {


  async renderUpdateConsulta(req, res){
    try{
        const consulta=await consultaService.getConsulta(req.params.id)
        if (!consulta) {
          return res.status(404).json({ error: 'Consulta not found' });
        }
        res.render('consulta/responderConsulta',{consulta});
    }catch(err){
      res.status(500).send(err.message);
    }
  }

  async listaConsultas(req, res){
    try{
      const consultas=await consulta.find();
      const usuarios= await usuario.find();

      const consultasNombres=consultas.map(consulta=>({
        ...consulta._doc,
        usuarioNombre: usuarios.find(u=>u.Id===consulta.Id_usuario)?.Nombre||"N/A",
      }));
      if (!Array.isArray(consultas)) {
        return res.status(400).json({ error: 'Los paquetes no son un array' });
      }
      res.render('consulta/listaConsultas', { consultas: consultasNombres });

    }catch(err){
      res.status(500).json({ error: err.message });
    }
  }
  
  async listaConsultasUsuario(req, res){
    try{
      const{idUsuario}= req.params;
      const consultas=await consulta.find({Id_usuario:idUsuario});
      const usuarios= await usuario.find();

      const consultasNombres=consultas.map(consulta=>({
        ...consulta._doc,
        usuarioNombre: usuarios.find(u=>u.Id===consulta.Id_usuario)?.Nombre||"N/A",
      }));
      if (!Array.isArray(consultas)) {
        return res.status(400).json({ error: 'Los paquetes no son un array' });
      }
      res.render('consulta/listaConsultasUsuario', { consultas: consultasNombres });

    }catch(err){
      res.status(500).json({ error: err.message });
    }
  }
 
  async createConsulta(req, res) {
    try {
      const userId = req.session.usuarioId; 
  
      if (!userId) {
        return res.status(401).send('Usuario no autenticado');
      }
  
      const nuevaConsulta = {
        Id_usuario: userId,  
        consulta: req.body.consulta,  
        respuesta: null,  
      };
  
      await consultaService.createConsulta(nuevaConsulta);
  
      res.redirect(`/api/consulta/consultasUsuario/${userId}`);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  
 
  async getConsulta(req, res) {
    try {
      const consulta = await consultaService.getConsulta(req.params.id);
      if (!consulta) {
        return res.status(404).json({ error: 'Consulta not found' });
      }
      res.json(consulta);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async updateConsulta(req, res) {
    try {
      const consulta = await consultaService.updateConsulta(req.params.id, req.body);
      if (!consulta) {
        return res.status(404).json({ error: 'Consulta not found' });
      }
      res.redirect('/api/consulta/listaConsultas');  
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async deleteConsulta(req, res) {
    try {
      const consulta = await consultaService.deleteConsulta(req.params.id);
      if (!consulta) {
        return res.status(404).json({ error: 'Consulta not found' });
      }
      res.redirect('/api/consulta/listaConsultas');
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

 
async deleteConsulta2(req, res) {
  try {
    const userId = req.session.usuarioId; 
    const consulta = await consultaService.deleteConsulta(req.params.id);
    if (!consulta) {
      return res.status(404).json({ error: 'Consulta not found' });
    }
    res.redirect(`/api/consulta/consultasUsuario/${userId}`);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
}

module.exports = new consultaController();