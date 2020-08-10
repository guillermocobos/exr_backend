const { Schema, model } = require('mongoose');


const PartnerSchema = Schema ( {
    nombre: {
       type: String,
       required: true
    },
    img: {
        type: String
    },
    contidadReservas: {
        type: Number
    },
    ultimaReserva: {
        type: Date
    },
    fechaAlta: {
        type: Date,
        default: Date.now()
    },
    activo: {
        type: Boolean,
        default: true
    },
    usuarioAlta: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }

});

PartnerSchema.method('toJSON', function(){
    const { __v, _id, ...object} = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Partner', PartnerSchema);