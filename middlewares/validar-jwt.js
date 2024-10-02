const { response, request } = require("express");

const jwt = require("jsonwebtoken");

const validaJWT = (req=request , res = response, next)=>{
    const token = req.header("Autorization");
    console.log("Autorization",token);  

    if (!token){
        return res.status(401).json({
            msg: 'No Hay token en la peticion'
        });

    }
    try {
        //Verificamos token 
        console.log("Verificamos token");
        const token_v = jwt.verify(token,process.env.SECRETTCLAVEPUBLICA ) ;  
        console.log("Paso token");

        console.log("token_v",token_v);
        const { Cli_Id } = token_v
        console.log("uid",Cli_Id);
        console.log("agregamos el id al req para usarlo en el llamado del SP");
        req.Cli_Id = Cli_Id //agregamos el id al req para usarlo en el llamado del SP
        console.log("agregamos el id al req para usarlo en el llamado del SP");
        next(); 
    } catch (error) {
        // console.log(error)
        res.status(401).json({
            msg: 'Token invalido'
        })
    }

}

module.exports = {
    validaJWT
}