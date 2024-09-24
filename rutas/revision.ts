import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getRevisiones_orden, postRevision } from "../controllers/revisiones";

const route = Router();

// route.get("/", [validarjwt], getRespuestas);
route.get("/orden/:id", [validarjwt], getRevisiones_orden);
route.post("/", [validarjwt], postRevision);

export default route;
