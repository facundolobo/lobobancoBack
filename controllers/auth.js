const { response, request } = require("express");
const { db } = require("../db/conexion");
const generaJWT = require("../helpers/generaJWT");
const { respJsonAuth } = require("../db/resp-auth-json");

const login = async(req=request , res = response) =>{

     //Ejecuta la solicitud
    const { usuario, password } = req.body;

    let sql = 'call sp_Core_ValidarUserPass( :_usuario , :_password )'
    let paramsSql = {
        _usuario: usuario,
        _password: password
    }

    respJsonAuth(res,sql,paramsSql)  

}


module.exports={
    login
}