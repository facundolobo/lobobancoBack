require('dotenv').config();

const jwt = require("jsonwebtoken");

const generaJWT = (id = '') => {
    return new Promise(( resolve, reject) =>{
        
        const payload = { Cli_Id: id };

        jwt.sign(payload, process.env.SECRETTCLAVEPUBLICA,{
            expiresIn:'1h'
        }, (err, token) =>{
            if (err){
                reject('No se pudo generar el token');
            }else{
                resolve(token);
            }
        } )
    })
}

module.exports = generaJWT
