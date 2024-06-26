import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { postGarantia } from "../controllers/garantia";

const route = Router();

route.post("/", [validarjwt], postGarantia);

export default route;
