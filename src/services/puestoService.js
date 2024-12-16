// src/services/puestoService.js
const Puesto = require('../models/puesto');

class puestoService {

    async listaPuestos() {
        return await Puesto.find();
    }

    async deletePuesto(id) {
        const puestoEliminado = await Puesto.findByIdAndDelete(id);
        return puestoEliminado;
    }

    async createPuesto(data) {

        const puesto = new Puesto(data);
        await puesto.save();
        return puesto;
    }
    async getPuesto(id) {
        return await Puesto.findById(id);

    }
    async deletePuesto(id) {
        return await Puesto.findByIdAndDelete(id);

    }
}

module.exports = new puestoService();