const { Router } = require('express');
const { 
    creacionClienteWeb,
 } = require('../controllers/cliente');

const router = Router();


router.post('/onbording', []
    ,  creacionClienteWeb); 

    

module.exports = router;