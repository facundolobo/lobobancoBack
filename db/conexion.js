
require('dotenv').config();
const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DIRECCIONBBDDWEB) // Example for postgres

// const db = new Sequelize(process.env.NOMBREBBDD, process.env.USERBBDD, process.env.PASSWORD,{
//     host: process.env.DIRECCIONBBDD,
//     dialect: 'mysql'
// }) 


module.exports = {
    db
}