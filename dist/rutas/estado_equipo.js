"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validarToken_1 = require("../middlewares/validarToken");
const estado_equipo_1 = require("../controllers/estado_equipo");
const route = (0, express_1.Router)();
route.get("/", [validarToken_1.validarjwt], estado_equipo_1.getEstado_equipo);
exports.default = route;
//# sourceMappingURL=estado_equipo.js.map