"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validarToken_1 = require("../middlewares/validarToken");
const respuestas_1 = require("../controllers/respuestas");
const route = (0, express_1.Router)();
route.get("/", [validarToken_1.validarjwt], respuestas_1.getRespuestas);
route.get("/orden/:id", [validarToken_1.validarjwt], respuestas_1.getRespuestas_orden);
route.post("/", [validarToken_1.validarjwt], respuestas_1.postRespuestas);
exports.default = route;
//# sourceMappingURL=respuesta.js.map