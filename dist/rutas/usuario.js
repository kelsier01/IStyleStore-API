"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const validarToken_1 = require("../middlewares/validarToken");
const route = (0, express_1.Router)();
route.get("/", [validarToken_1.validarjwt], usuarios_1.getUsers);
route.get("/:id", [validarToken_1.validarjwt], usuarios_1.getUser);
route.post("/", usuarios_1.postUsuario);
exports.default = route;
//# sourceMappingURL=usuario.js.map