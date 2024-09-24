"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validarToken_1 = require("../middlewares/validarToken");
const modelos_1 = require("../controllers/modelos");
const route = (0, express_1.Router)();
route.get("/", [validarToken_1.validarjwt], modelos_1.getModelos);
route.post("/", [validarToken_1.validarjwt], modelos_1.postModelo);
route.put("/:id", [validarToken_1.validarjwt], modelos_1.putModelo);
route.delete("/:id", [validarToken_1.validarjwt], modelos_1.deleteModelo);
exports.default = route;
//# sourceMappingURL=modelo.js.map