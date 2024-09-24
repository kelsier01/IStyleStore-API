import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import {
  getCliente,
  getCliente_rut,
  getClientes,
  postCliente,
  putCliente,
} from "../controllers/clientes";
import { deleteUsuario } from "../controllers/clientes";

const route = Router();

route.get("/", [validarjwt], getClientes);
route.get("/:id", [validarjwt], getCliente);
route.get("/run/:run", [validarjwt], getCliente_rut);
route.post("/", [validarjwt], postCliente);
route.put("/:id", [validarjwt], putCliente);
route.delete("/:id", [validarjwt], deleteUsuario);

export default route;
