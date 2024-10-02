const { Router } = require('express');
const { 
    CreacionCuentaCAPesoCliente,
    ListarCuentasCliente,
    AcreditarDineroCuenta,
    TransferenciaCuentaACuenta, 
 } = require('../controllers/cuenta');

const { validaJWT } = require('../middlewares/validar-jwt');

const router = Router();



router.post('/CreacionCuentaCAPesoCliente', [validaJWT]
    ,  CreacionCuentaCAPesoCliente);

router.get('/ListarCuentasCliente', [validaJWT]
    ,  ListarCuentasCliente);

router.post('/AcreditarDineroCuenta', [validaJWT]
    ,  AcreditarDineroCuenta);

router.post('/TransferenciaCuentaACuenta', [validaJWT]
    ,  TransferenciaCuentaACuenta);
    

module.exports = router;