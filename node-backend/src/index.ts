import "dotenv/config"
import express from 'express';
import cors from 'cors';
import { router } from "./routes";
import { dbinit } from "./models/init";
const PORT = process.env.PORT || 3000;
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(router);


async function main () {
  
    try {
        
        dbinit();
        console.log('conexion establecida ');
        app.listen(PORT);
        console.log('Server on portt ', `http://localhost:${PORT}`)
    

    } catch (error) {
        console.log("no se pudo connetar a la base de datos", error);
    }
}

main();