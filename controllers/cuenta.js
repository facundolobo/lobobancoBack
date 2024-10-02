const { response, request } = require("express");
const { respJson } = require("../db/resp-json");


//Trasnferir dinero a otra cuenta 
const CreacionCuentaCAPesoCliente = async(req = request, res = response) => { 
    
    //Verificamos el id del usuario

    let Cli_Id= req.Cli_Id;

    const {TCueCli_NroDeb, TCueCli_NroCred, TCueCli_Saldo} = req.body; //obtenemos el TCueCli_Nro, TCueCli_Saldo del body
    let sql = 'call sp_Web_CreacionCuentaCAPesoCliente( :TCueCli_Cli_Id )'
    let paramsSql = {
        TCueCli_Cli_Id: Cli_Id,

    }

    respJson(res,sql,paramsSql)                                                 
}


//Listar de cuentas del cliente
const ListarCuentasCliente = async(req = request, res = response) => { 
    
    //Verificamos el id del usuario

    let Cli_Id= req.Cli_Id;

    let sql = 'call sp_Web_ListarCuentasCliente( :Cli_Id )'
    let paramsSql = {
        Cli_Id: Cli_Id
    }

    respJson(res,sql,paramsSql)                                                 
}

//Acreditar dinero en cuenta 
const AcreditarDineroCuenta = async(req = request, res = response) => { 
    
    //Verificamos el id del usuario

    let Cli_Id= req.Cli_Id;

    const {TCueCli_Nro, TCueCli_Saldo} = req.body; //obtenemos el TCueCli_Nro, TCueCli_Saldo del body

    let sql = 'call sp_Web_AcreditarDineroCuenta( :Cli_Id, :TCueCli_Nro, :TCueCli_Saldo )'
    let paramsSql = {
        Cli_Id: Cli_Id,
        TCueCli_Nro,
        TCueCli_Saldo

    }

    respJson(res,sql,paramsSql)                                                 
}

//Trasnferir dinero a otra cuenta 
const TransferenciaCuentaACuenta = async(req = request, res = response) => { 
    
    //Verificamos el id del usuario

    let Cli_Id= req.Cli_Id;

    const {TCueCli_NroDeb, TCueCli_NroCred, TCueCli_Saldo} = req.body; //obtenemos el TCueCli_Nro, TCueCli_Saldo del body

    let sql = 'call sp_Web_TransferenciaCuentaACuenta( :TCueCli_Cli_Id, :TCueCli_NroDeb, :TCueCli_NroCred, :TCueCli_Saldo)'
    let paramsSql = {
        TCueCli_Cli_Id: Cli_Id,
        TCueCli_NroDeb,
        TCueCli_NroCred,
        TCueCli_Saldo

    }

    respJson(res,sql,paramsSql)                                                 
}





module.exports={
    CreacionCuentaCAPesoCliente,
    ListarCuentasCliente,
    AcreditarDineroCuenta,
    TransferenciaCuentaACuenta,
}