"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validarToken_1 = require("../middlewares/validarToken");
const garantia_1 = require("../controllers/garantia");
const route = (0, express_1.Router)();
route.post("/", [validarToken_1.validarjwt], garantia_1.postGarantia);
route.put("/:id", [validarToken_1.validarjwt], garantia_1.putGarantia);
exports.default = route;
//# sourceMappingURL=garantia.js.map