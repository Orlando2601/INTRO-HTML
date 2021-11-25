//requerimiento del modulo express y path
const express = require("express");
const path = require("path");
//declaracion de la constante app con la funcion de express
const app = express();

//declaramos la variable de ubicación de la carpeta public
const publicPath = path.resolve(__dirname, './public')
//declaramos el metodo static de express para hacer referencia  a la carpeta de archivos estaticos de nuestro protyecto
app.use(express.static(publicPath))
//abir puerto del pc para establecer servidor, y mostrar mensaje de estar activo
app.listen(3000, ()=>{
    console.log('Servidor corriendo en el puerto 3000')
});




