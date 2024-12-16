// src/services/paqueteDeViajeService.js
const PaqueteDeViaje = require('../models/paqueteDeViaje');

class paqueteDeViajeService {


    async catalogoViajes(){
        return await PaqueteDeViaje.find({activo:true});
     }

    async listaViajes(){
       return await PaqueteDeViaje.find();
    }
    async createPaqueteDeViaje(data) {

        const paqueteDeViaje = new PaqueteDeViaje(data);
        await paqueteDeViaje.save();
        return paqueteDeViaje;
    }
    async getPaqueteDeViaje(id) {
        return await PaqueteDeViaje.findById(id);

    }

    async getPaqueteDeViaje(id) {
        return await PaqueteDeViaje.findById(id)
          .populate('Id_ciudad') 
          .populate('Id_transporte') 
          .populate('Id_actividad1') 
          .populate('Id_actividad2'); 
      }

    async updatePaqueteDeViaje(id, data) {
        return await PaqueteDeViaje.findByIdAndUpdate(id, data, { new: true });
    }
    async deletePaqueteDeViaje(id) {
        return await PaqueteDeViaje.findByIdAndDelete(id);

    }
}

module.exports = new paqueteDeViajeService();