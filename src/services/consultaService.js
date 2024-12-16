// src/services/consultaService.js
const Consulta = require('../models/consulta');

class consultaService {
    async createConsulta(data) {

        const consulta = new Consulta(data);
        await consulta.save();
        return consulta;
    }
    async getConsulta(id) {
        return await Consulta.findById(id);

    }

    async updateConsulta(id, data) {
        return await Consulta.findByIdAndUpdate(id, data, { new: true });
    }
    async deleteConsulta(id) {
        return await Consulta.findByIdAndDelete(id);

    }
}

module.exports = new consultaService();