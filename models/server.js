const express = require('express');
const cors = require('cors');
const { db } = require('../db/conexion');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.authPath     = '/api/auth';
        this.cuentaPath   = '/api/cuenta';
        this.clientePath  = '/api/cliente';

        //Middlewares
        this.dbconexion();
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();
    }

    async dbconexion(){
        try {
            await db.authenticate();
            console.log('Conexion a la BD exitosa');

        } catch (error) {
            throw new Error(error);
        }
    }
    middlewares(){

        //CORS
        this.app.use(cors());

        //Lectura de oarse del body
        this.app.use(express.json());

        // Directorio Público
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.authPath,     require('../routes/auth'));
        this.app.use(this.cuentaPath,   require('../routes/cuenta'));
        this.app.use(this.clientePath,   require('../routes/cliente'));

    }
        
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto', this.port );
        });
    }
}

module.exports= Server;