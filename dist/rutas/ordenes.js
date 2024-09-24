"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validarToken_1 = require("../middlewares/validarToken");
const ordenes_1 = require("../controllers/ordenes");
const route = (0, express_1.Router)();
route.get("/", [validarToken_1.validarjwt], ordenes_1.getOrdenes);
route.get("/pendientes/", [validarToken_1.validarjwt], ordenes_1.getOrdenes_pendientes);
route.get("/:id", [validarToken_1.validarjwt], ordenes_1.getOrden);
route.post("/buscarOrden/", [validarToken_1.validarjwt], ordenes_1.postOrden_search);
route.post("/", [validarToken_1.validarjwt], ordenes_1.postOrden);
route.put("/:id", [validarToken_1.validarjwt], ordenes_1.putOrden);
exports.default = route;
//# sourceMappingURL=ordenes.js.map