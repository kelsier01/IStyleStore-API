import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import {
  getOrden,
  getOrdenes,
  getOrdenes_pendientes,
  postOrden,
  postOrden_search,
  putOrden,
} from "../controllers/ordenes";

const route = Router();

route.get("/", [validarjwt], getOrdenes);
route.get("/pendientes/", [validarjwt], getOrdenes_pendientes);
route.get("/:id", [validarjwt], getOrden);
route.post("/buscarOrden/", [validarjwt], postOrden_search);
route.post("/", [validarjwt], postOrden);
route.put("/:id", [validarjwt], putOrden);

export default route;
