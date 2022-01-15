const path = require("path");

const controllador = {          //Creamos un objeto literal con las rutas de las vistas
    home : (req, res) => res.sendFile(path.resolve(__dirname, '../views/home.html')),
    about : (req, res) => res.sendFile(path.resolve(__dirname, '../views/about.html')),
}

module.exports = controllador;