const express= require('express');
const app= express();
const path = require("path")
const rutahome = require('./routes/routes-home.js');
const rutaabout = require('./routes/routes-about.js');

app.get("/" , rutahome);
app.get("/about" , rutaabout);


app.listen(3000, ()=> {
    console.log('servidor 3000 funcionando')
});




app.use(express.static(__dirname + '/public'));