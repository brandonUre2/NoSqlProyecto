// src/controllers/empleadoController.js
const empleadoService = require('../services/empleadoService');
const puestoService = require('../services/puestoService');
const puesto = require('../models/puesto');

 
class empleadoController {
 
  async listaEmpleados(req, res) {
    try {
      const empleados = await empleadoService.listaEmpleados(); 
      res.render('empleado/listaEmpleados', { empleados });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async renderCreateForm(req, res) {
    try {
      const puestos = await puestoService.listaPuestos();  
      res.render('empleado/crearEmpleado', { puestos });  
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
async createEmpleado(req, res) {
    try {
        const empleado = await empleadoService.createEmpleado(req.body);
        res.redirect('/api/empleado/listaEmpleados');  
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}
 
  async getEmpleado(req, res) {
    try {
      const empleado = await empleadoService.getEmpleado(req.params.id);
      if (!empleado) {
        return res.status(404).json({ error: 'Empleado not found' });
      }
      res.json(empleado);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
 
  async deleteEmpleado(req, res) {
    try {
      const empleado = await empleadoService.deleteEmpleado(req.params.id);
      if (!empleado) {
        return res.status(404).json({ error: 'Empleado not found' });
      }
      res.redirect("/api/empleado/listaEmpleados")
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async  renderEditForm(req, res) {
    try {
        const empleado = await empleadoService.getEmpleado(req.params.id); 
        if (!empleado) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        const puestos = await puesto.find(); 

        res.render('empleado/editarEmpleado', {empleado, puestos}); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async  updateEmpleado(req, res) {
    try {
        const updatedEmpleado = await empleadoService.updateEmpleado(req.params.id, req.body); 
        if (!updatedEmpleado) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }
        res.redirect('/api/empleado/listaEmpleados'); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
}
 
module.exports = new empleadoController();