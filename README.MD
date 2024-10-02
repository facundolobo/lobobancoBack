# Configuración del Proyecto

Sigue estos pasos para configurar y ejecutar el proyecto correctamente.

## 1. Crear la Base de Datos

Ejecuta el script SQL `bdclientes.sql` para crear la base de datos con todos sus registros.

## 2. Importar Colección en Postman

1. Importa la colección de Postman para realizar llamadas a las APIs:
   - Archivo: `RestServer-Mysql-Login.postman_collection`

2. Importa las variables de entorno en Postman:
   - Archivo: `Rest-server.postman_environment.json`

## 3. Instalar Dependencias

Navega al directorio del proyecto `rest-server` y ejecuta el siguiente comando para instalar las dependencias:
`npm install`


## 4. Revisar Credenciales de Base de Datos

Asegúrate de que las credenciales de la base de datos en el archivo `.env` sean correctas. Este archivo debe contener las variables de entorno necesarias para conectarse a la base de datos.

Ejemplo de archivo `.env`:

¡Listo! Con estos pasos, deberías tener todo configurado para ejecutar el proyecto correctamente.