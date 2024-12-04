const express =  require("express"); //le digo que voy a requerir el módulo express, lo voy a guardar en una constacte express

const app=express();//voy a crear una constante app que será una instancia de express 

app.get("/", (req,res)=>res.send("Hello word with express")) //acá atraves del app.get le digo que cuando pidan la ruta inicial de la aplicación quiero que recibas un request y un response y respondas con un mensaje que diga "Hello word with express"

app.listen(3000);//lo ejecuto diciéndole que quiero que funcione en el puerto 3000 que es el habilitado en AWS
console.log("Server on port 3000") //enviamos en mje por consola para ver que funcione