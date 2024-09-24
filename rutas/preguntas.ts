import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getPreguntas } from "../controllers/preguntas";

const route = Router();

route.get("/", [validarjwt], getPreguntas);

export default route;