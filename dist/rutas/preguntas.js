"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validarToken_1 = require("../middlewares/validarToken");
const preguntas_1 = require("../controllers/preguntas");
const route = (0, express_1.Router)();
route.get("/", [validarToken_1.validarjwt], preguntas_1.getPreguntas);
route.post("/", [validarToken_1.validarjwt], preguntas_1.postPreguntas);
exports.default = route;
//# sourceMappingURL=preguntas.js.map