const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')

const { getUsuarios, crearUsuario, actualizarUsuario } = require('../controllers/usuarios');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/', validarJWT, getUsuarios);

router.post('/', 
   [
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El password es obligatorio').not().isEmpty(),
    check('email','Debe ingresar un correo electronico válido').isEmail(),
    validarCampos,
   ], 
   crearUsuario);

router.put('/:id', 
   [
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('email','Debe ingresar un correo electronico válido').isEmail(),
    validarCampos,
   ], 
   actualizarUsuario )


module.exports = router;