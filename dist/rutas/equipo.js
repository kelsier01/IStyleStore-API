"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validarToken_1 = require("../middlewares/validarToken");
const equipos_1 = require("../controllers/equipos");
const route = (0, express_1.Router)();
route.get("/", [validarToken_1.validarjwt], equipos_1.getEquipos);
route.post("/", [validarToken_1.validarjwt], equipos_1.postEquipo);
route.put("/:id", [validarToken_1.validarjwt], equipos_1.putEquipo);
route.delete("/:id", [validarToken_1.validarjwt], equipos_1.deleteEquipo);
exports.default = route;
//# sourceMappingURL=equipo.js.map