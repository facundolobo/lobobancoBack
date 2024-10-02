const generaJWT = require("../helpers/generaJWT");

const { response, request } = require('express');
const { db } = require("./conexion");

const respJsonAuth= async( res = response, sql, paramsSql )=> {
        
    try {
    //peticion SQL a BBDD
    
    const resp = await db.query(sql, {replacements: paramsSql} ); //obtenemos la resp que es "id" del usuario
    
    //Si no llego respondemos que fallo Usuario/Pass
    if( resp[0] == undefined ){
        
        return res.status(401).json({
            msg: 'Error Usuario/Pass',

        })
    }

    //Si llego Usuario/Pass bien
    if( resp[0] != undefined ){
        //obtenemos el Cli_Id de la base de datos
        const id = resp[0].Cli_Id;

        // Genera el JWT
        const token = await generaJWT( id );

        //devolvemos la respuesta el mensaje
        return res.status(200).json({
            msg: "Login Exitoso",
            token
        })
    }


    } catch (error) {

    res.status(500).json({

        msg: "Error de servidor",

    })}
}
module.exports={
    respJsonAuth
}