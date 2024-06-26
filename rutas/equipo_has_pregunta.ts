import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getEquipos_preguntas, postEquipo_preguntas, putEquipo_preguntas } from "../controllers/equipo_has_pregunta";

const route = Router();

route.get("/", [validarjwt], getEquipos_preguntas);
route.post("/", [validarjwt], postEquipo_preguntas);
route.put("/:id", [validarjwt], putEquipo_preguntas);

export default route;
