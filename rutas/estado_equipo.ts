import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getEstado_equipo } from "../controllers/estado_equipo";

const route = Router();

route.get("/", [validarjwt], getEstado_equipo);

export default route;
