import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { deleteEquipo, getEquipos, postEquipo, putEquipo} from "../controllers/equipos";

const route = Router();

route.get("/", [validarjwt], getEquipos);
route.post("/", [validarjwt], postEquipo);
route.put("/:id", [validarjwt], putEquipo);
route.delete("/:id", [validarjwt], deleteEquipo )
export default route;
