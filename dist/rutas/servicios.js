"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validarToken_1 = require("../middlewares/validarToken");
const servicios_1 = require("../controllers/servicios");
const route = (0, express_1.Router)();
route.get("/", [validarToken_1.validarjwt], servicios_1.getServicios);
route.post("/", [validarToken_1.validarjwt], servicios_1.postServicio);
route.put("/:id", [validarToken_1.validarjwt], servicios_1.putServicio);
route.delete("/:id", [validarToken_1.validarjwt], servicios_1.deleteServicio);
exports.default = route;
//# sourceMappingURL=servicios.js.map