import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import {
  getRespuestas,
  getRespuestas_orden,
  postRespuestas,
} from "../controllers/respuestas";

const route = Router();

route.get("/", [validarjwt], getRespuestas);
route.get("/orden/:id", [validarjwt], getRespuestas_orden);
route.post("/", [validarjwt], postRespuestas);

export default route;
