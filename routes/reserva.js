const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos')

const { validarJWT } = require('../middlewares/validar-jwt');
const { crearReserva } = require('../controllers/reservas');

const router = Router();

router.post('/', crearReserva);


module.exports = router;