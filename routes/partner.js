const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos')

const { validarJWT } = require('../middlewares/validar-jwt');
const { crearPartner } = require('../controllers/partners');

const router = Router();

router.post('/', crearPartner);


module.exports = router;