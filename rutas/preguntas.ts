import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getPreguntas, postPreguntas, putPregunta } from "../controllers/preguntas";

const route = Router();

route.get("/", [validarjwt], getPreguntas);
route.post("/", [validarjwt], postPreguntas);
route.put("/:id", [validarjwt], putPregunta);

export default route;