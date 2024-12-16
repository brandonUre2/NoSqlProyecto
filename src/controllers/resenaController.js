// src/controllers/resenaController.js
const resenaService = require('../services/resenaService');
const paqueteDeViaje = require('../models/paqueteDeViaje');
const resena = require('../models/resena');
const usuario=require('../models/usuario');

 
class resenaController {
 

  async listaResenasUsuario(req, res){
    try{

      const{idUsuario}= req.params;
      const resenas=await resena.find({Id_usuario:idUsuario}); 
      const paquetes=await paqueteDeViaje.find();
      const usuarios= await usuario.find();

      const resenasNombres=resenas.map(resena=>({
        ...resena._doc,
        paqueteNombre: paquetes.find(p=>p.Id===resena.Id_paquete)?.Nombre||"N/A",
        usuarioNombre: usuarios.find(u=>u.Id===resena.Id_usuario)?.Nombre||"N/A",
      }));
      if (!Array.isArray(resenas)) {
        return res.status(400).json({ error: 'Los paquetes no son un array' });
      }
      res.render('resena/listaResenasUsuario', { resenas: resenasNombres });

    }catch(err){
      res.status(500).json({ error: err.message });
    }
  }
  async listaResenas(req, res){
    try{
      const resenas=await resena.find();
      const paquetes=await paqueteDeViaje.find();
      const usuarios= await usuario.find();

      const resenasNombres=resenas.map(resena=>({
        ...resena._doc,
        paqueteNombre: paquetes.find(p=>p.Id===resena.Id_paquete)?.Nombre||"N/A",
        usuarioNombre: usuarios.find(u=>u.Id===resena.Id_usuario)?.Nombre||"N/A",
      }));
      if (!Array.isArray(resenas)) {
        return res.status(400).json({ error: 'Los paquetes no son un array' });
      }
      res.render('resena/listaResenas', { resenas: resenasNombres });

    }catch(err){
      res.status(500).json({ error: err.message });
    }
  }
 
  async renderCreateResena(req, res) {
    try {
      const paquetes = await paqueteDeViaje.find();
      res.render("resena/crearResena",{paquetes})
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async crearResena(req,res){
    try{
      const userId = req.session.usuarioId; 
      const nuevaResena= await resenaService.createResena({
        Id_usuario:userId,
        Id_paquete:req.body.Id_paquete,
        mensaje:req.body.mensaje,
        valoracion:req.body.valoracion
      })
      console.log(req.body);
      res.redirect('/api/resena/listaResenas');
    }catch{
      res.status(500).json({ error: err.message });
    }
  }
 
  async getResena(req, res) {
    try {
      const resena = await resenaService.getResena(req.params.id);
      if (!resena) {
        return res.status(404).json({ error: 'Resena not found' });
      }
      res.json(resena);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async updateResena(req, res) {
    try {
      const resena = await resenaService.updateResena(req.params.id, req.body);
      if (!resena) {
        return res.status(404).json({ error: 'Resena not found' });
      }
      res.json(resena);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async deleteResena(req, res) {
    try {
      const resena = await resenaService.deleteResena(req.params.id);
      if (!resena) {
        return res.status(404).json({ error: 'Resena not found' });
      }
      res.redirect(`/api/resena/listaResenaUsuario/${userId}`);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
 
module.exports = new resenaController();