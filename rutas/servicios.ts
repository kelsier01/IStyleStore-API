import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { deleteServicio, getServicios, postServicio, putServicio } from "../controllers/servicios";

const route = Router();

route.get("/", [validarjwt], getServicios);
route.post("/", [validarjwt], postServicio);
route.put("/:id", [validarjwt], putServicio);
route.delete("/:id", [validarjwt], deleteServicio);
export default route;
