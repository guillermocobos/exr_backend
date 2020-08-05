/*
    Path: 'api/login'
*/

const { Router } = require('express');
const { login } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require ('../middlewares/validar-campos');

const router = Router();



router.post('/', 
   [
       check('email', 'No es un correo electronico válido').isEmail(),
       check('email', 'El email es obligatorio').not().isEmpty(),
       check('password', 'El password es obligatorio').not().isEmpty(),
       validarCampos
   ],
   login
)


module.exports = router;