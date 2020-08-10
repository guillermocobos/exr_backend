const response = require('express');

const Partner = require('../models/partner');

const crearPartner  = async (req, res = response)=> {

    try {
        const partner = new Partner(req.body);
        await partner.save();
        res.json({
            ok: true,
            partner
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
    crearPartner
}