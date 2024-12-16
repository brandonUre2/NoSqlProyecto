// src/services/actividadService.js
const Actividad = require('../models/actividad');

class actividadService {


    async listaActicidades(){
        return await Actividad.find();
    }
    
    async createActividad(data) {

        const actividad = new Actividad(data);
        await actividad.save();
        return actividad;
    }
    async getActividad(id) {
        return await Actividad.findById(id);

    }

    async updateActividad(id, data) {
        return await Actividad.findByIdAndUpdate(id, data, { new: true });
    }
    async deleteActividad(id) {
        return await Actividad.findByIdAndDelete(id);

    }
}

module.exports = new actividadService();