import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getModelos, postModelo, putModelo, deleteModelo } from "../controllers/modelos";

const route = Router();

route.get("/", [validarjwt], getModelos);
route.post("/", [validarjwt], postModelo);
route.put("/:id", [validarjwt], putModelo);
route.delete("/:id",[validarjwt], deleteModelo);
export default route;
