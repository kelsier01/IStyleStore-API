"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validarToken_1 = require("../middlewares/validarToken");
const orden_has_servicios_1 = require("../controllers/orden_has_servicios");
const route = (0, express_1.Router)();
route.get("/orden/:id", [validarToken_1.validarjwt], orden_has_servicios_1.getOrden_servicios);
route.post("/", [validarToken_1.validarjwt], orden_has_servicios_1.postOrden_servicios);
exports.default = route;
//# sourceMappingURL=orden_has_servicios.js.map