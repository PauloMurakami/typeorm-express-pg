import "reflect-metadata";
import express from "express";
import "./db/dataSource"
import cors from 'cors';
import { routes } from "./routes";

const app = express();

const allowedOrigins = ['http://localhost:4200'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(express.json())

app.use(cors(options));
app.use(routes)

app.listen(3000, () =>{
    console.log("Server is running");
}) 