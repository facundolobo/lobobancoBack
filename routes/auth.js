const { check }  = require('express-validator');
const { Router } = require('express');

const { validarCampos } = require('../middlewares/validar-campos');
const { login }         = require('../controllers/auth');


const router = Router();

router.post('/login', 
    [    
        // check('email', 'El email no es valido').isEmail(), //prepara los errores
        check('usuario', 'la password es obligatoria').not().isEmpty(), //prepara los errores
        check('password', 'la password es obligatoria').not().isEmpty(), //prepara los errores
        validarCampos
    ]
    , login)

module.exports = router;