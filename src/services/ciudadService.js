// src/services/ciudadService.js
const Ciudad = require('../models/ciudad');

class ciudadService {


    async listaCiudades() {
        return await Ciudad.find();
    }

    async createCiudad(data) {

        const ciudad = new Ciudad(data);
        await ciudad.save();
        return ciudad;
    }

    async deleteCiudad(id) {
        return await Ciudad.findByIdAndDelete(id);

    }
}

module.exports = new ciudadService();