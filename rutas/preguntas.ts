import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getPreguntas, postPreguntas } from "../controllers/preguntas";

const route = Router();

route.get("/", [validarjwt], getPreguntas);
route.post("/", [validarjwt], postPreguntas);
export default route;