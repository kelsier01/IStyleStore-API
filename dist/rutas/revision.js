"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validarToken_1 = require("../middlewares/validarToken");
const revisiones_1 = require("../controllers/revisiones");
const route = (0, express_1.Router)();
// route.get("/", [validarjwt], getRespuestas);
route.get("/orden/:id", [validarToken_1.validarjwt], revisiones_1.getRevisiones_orden);
route.post("/", [validarToken_1.validarjwt], revisiones_1.postRevision);
exports.default = route;
//# sourceMappingURL=revision.js.map