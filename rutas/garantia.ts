import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { postGarantia, putGarantia } from "../controllers/garantia";

const route = Router();

route.post("/", [validarjwt], postGarantia);
route.put("/:id", [validarjwt], putGarantia);

export default route;
