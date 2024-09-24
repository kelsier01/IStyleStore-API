import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import {
  getOrden_servicios,
  postOrden_servicios,
} from "../controllers/orden_has_servicios";

const route = Router();

route.get("/orden/:id", [validarjwt], getOrden_servicios);
route.post("/", [validarjwt], postOrden_servicios);

export default route;
