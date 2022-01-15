const express = require("express");     //Requerir el framework para usarlo
const app = express();                  //Tendremos en la variable los metodos de express
const path = require("path");
const mainRoutes = require("./routes/mainRoutes");

const port = process.env.port || 3000;  //al puerto lo agregamos en una variable para que no tenga problemas al mismo
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));    //Convertir la carpeta public a archivos publicos (estáticos)
app.use(mainRoutes);

app.listen(port, () => console.log("Corriendo servidor"));