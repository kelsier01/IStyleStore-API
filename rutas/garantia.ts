import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import {
  postGarantia,
  putGarantia,
  getGarantia,
} from "../controllers/garantia";

const route = Router();

route.get("/:id", [validarjwt], getGarantia);
route.post("/", [validarjwt], postGarantia);
route.put("/:id", [validarjwt], putGarantia);

export default route;
