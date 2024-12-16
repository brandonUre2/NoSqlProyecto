// src/services/resenaService.js
const Resena = require('../models/resena');

class resenaService {

    async listaResenas(){
        return await Resena.find();
    }
    async createResena(data) {

        const resena = new Resena(data);
        await resena.save();
        return resena;
    }
    async getResena(id) {
        return await Resena.findById(id);

    }

    async updateResena(id, data) {
        return await Resena.findByIdAndUpdate(id, data, { new: true });
    }
    async deleteResena(id) {
        return await Resena.findByIdAndDelete(id);

    }
}

module.exports = new resenaService();