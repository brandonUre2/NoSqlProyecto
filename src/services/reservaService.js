// src/services/reservaService.js
const Reserva = require('../models/reserva');

class reservaService {


    async listaReservas(){
        return await Reserva.find();
    }

    async listaReservaUsuario(idUsuario){
        return await Reserva.find({Id_usuario:idUsuario});
    }
    async createReserva(data) {

        const reserva = new Reserva(data);
        await reserva.save();
        return reserva;
    }
    async getReserva(id) {
        return await Reserva.findById(id);

    }

    async updateReserva(id, data) {
        return await Reserva.findByIdAndUpdate(id, data, { new: true });
    }
    async deleteReserva(id) {
        return await Reserva.findByIdAndDelete(id);

    }
}

module.exports = new reservaService();