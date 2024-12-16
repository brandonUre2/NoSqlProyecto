// src/services/hospedajeService.js
const Hospedaje = require('../models/hospedaje');

class hospedajeService {


    async listaHospedajes(){
        return await Hospedaje.find();
    }
    async createHospedaje(data) {

        const hospedaje = new Hospedaje(data);
        await hospedaje.save();
        return hospedaje;
    }
    async getHospedaje(id) {
        return await Hospedaje.findById(id);

    }

    async updateHospedaje(id, data) {
        return await Hospedaje.findByIdAndUpdate(id, data, { new: true });
    }
    async deleteHospedaje(id) {
        return await Hospedaje.findByIdAndDelete(id);

    }
}

module.exports = new hospedajeService();