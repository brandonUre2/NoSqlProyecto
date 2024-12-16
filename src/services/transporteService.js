// src/services/transporteService.js
const Transporte = require('../models/transporte');

class transporteService {


    async listaTransportes(){
           return await Transporte.find();
    }
    async createTransporte(data) {

        const transporte = new Transporte(data);
        await transporte.save();
        return transporte;
    }
    async getTransporte(id) {
        return await Transporte.findById(id);

    }

    async updateTransporte(id, data) {
        return await Transporte.findByIdAndUpdate(id, data, { new: true });
    }
    async deleteTransporte(id) {
        return await Transporte.findByIdAndDelete(id);

    }
}

module.exports = new transporteService();