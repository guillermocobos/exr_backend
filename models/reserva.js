const { Schema, model } = require('mongoose');

const ReservaSchema = Schema ( {
    // A que partner se le realiza la reserva
    partner: {
        type: Schema.Types.ObjectId,
        ref: 'Partner'
    },
    // Observaciones a la reserva por parte del cliente/usuario
    Email: {
       type: String
    },
    //  Numero Telefono del usuario que realiza la reserva
    numeroCelular: {
        type: String
     },
    // Usuario que solicita la reserva
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    // Observaciones a la reserva por parte del cliente/usuario
    pedidoUsuario: {
        type: String
    },
    // Cantidad de comensales
    comensales: {
        type: Number
    },
    // Fecha de grabación
    fechaAlta: {
        type: Date,
        default: Date.now()
    },
    // Fecha de la reserva
    fechaReserva: {
        type: Date
    },

    // Hora de la reserva
    horaReserva: {
        type: Date
    },

    // Origen: Si es a través de la app mobile o del sitio web 
    // Sitio web - Mobile
    Origen: {
        type: String
    },

    // Contestada por parte del partner
    contestada: {
        type: Boolean,
        default: false
    },

    // Fecha de confirmacion de la reserva, por parte del partner
    fechaConfirmacion: {
        type: Date
    },
    // Fecha de concelacion de la reserva, por parte del partner
    fechaCancelacion: {
        type: Date
    },

    // Calificacion al partner de la reserva por parte del usuario
    calificacion: {
        type: Number
    },

});

ReservaSchema.method('toJSON', function(){
    const { __v, _id, ...object} = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Reserva', ReservaSchema);