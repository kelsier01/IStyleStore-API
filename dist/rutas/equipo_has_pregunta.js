"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validarToken_1 = require("../middlewares/validarToken");
const equipo_has_pregunta_1 = require("../controllers/equipo_has_pregunta");
const route = (0, express_1.Router)();
route.get("/", [validarToken_1.validarjwt], equipo_has_pregunta_1.getEquipos_preguntas);
route.post("/", [validarToken_1.validarjwt], equipo_has_pregunta_1.postEquipo_preguntas);
route.put("/:id", [validarToken_1.validarjwt], equipo_has_pregunta_1.putEquipo_preguntas);
route.put("/deshabilitar/:id/:estado", [validarToken_1.validarjwt], equipo_has_pregunta_1.deshabilitarPregunta);
exports.default = route;
//# sourceMappingURL=equipo_has_pregunta.js.map