import { Router } from "express";
import { getUsers, getUser, postUsuario } from "../controllers/usuarios";
import { validarjwt } from "../middlewares/validarToken";

const route = Router();

route.get("/", [validarjwt], getUsers);
route.get("/:id", [validarjwt], getUser);
route.post("/", postUsuario);

export default route;
