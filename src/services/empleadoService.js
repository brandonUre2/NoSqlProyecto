// src/services/empleado.js
const Empleado = require('../models/empleado');
const Puesto = require('../models/puesto');
class empleadoService {



 async  listaEmpleados() {
        try {
          const empleados = await Empleado.find();  
      
          for (let empleado of empleados) {
            const puesto = await Puesto.findOne({ Id: empleado.IdPuesto });  
            if (puesto) {
              empleado.PuestoNombre = puesto.Nombre;  
            } else {
              empleado.PuestoNombre = 'N/A';  
            }
          }
      
          return empleados;
        } catch (err) {
          throw new Error(err.message);
        }
      }

    async createEmpleado(data) {

        const empleado = new Empleado(data);
        await empleado.save();
        return empleado;
    }
    async getEmpleado(id) {
        return await Empleado.findById(id);

    }

    async updateEmpleado(id, data) {
        return await Empleado.findByIdAndUpdate(id, data, { new: true });
    }
    async deleteEmpleado(id) {
        return await Empleado.findByIdAndDelete(id);

    }
}

module.exports = new empleadoService();