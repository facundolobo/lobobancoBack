const { response, request } = require("express");
const { respJson } = require("../db/resp-json");

//onbording
const creacionClienteWeb = async(req = request, res = response) => { 
    
    const {Cli_Dni, Cli_Usuario, Cli_Email, Cli_Pass} = req.body; //obtenemos el email y password
    console.log(Cli_Dni, Cli_Usuario, Cli_Email, Cli_Pass)
    let sql = 'call sp_Web_CreacionClienteWeb( :Cli_Dni, :Cli_Usuario, :Cli_Email, :Cli_Pass )'
    let paramsSql = {
        Cli_Dni, Cli_Usuario, Cli_Email, Cli_Pass
    }

    respJson(res,sql,paramsSql)                                                 
}

module.exports={
    creacionClienteWeb,

}