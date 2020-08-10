const response = require('express');

const Reserva = require('../models/reserva');

const crearReserva  = async (req, res = response)=> {

    try {
        const reserva = new Reserva(req.body);
        await reserva.save();
        res.json({
            ok: true,
            reserva
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        });
        
    }

}

module.exports = {
    crearReserva
}