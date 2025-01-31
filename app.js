import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("Funciona la conexion a la base de datos")
}).catch((error)=>{
    console.log("No funciona la conexion a la base de datos", error)
})


const app = express();

app.use(cors());

app.listen(4000, ()=>{
    console.log("Se escucha correctamente el servidor local")
});

