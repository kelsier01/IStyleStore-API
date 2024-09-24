"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEstado_equipo = void 0;
const estados_equipos_1 = __importDefault(require("../models/estados_equipos"));
//Traer todos los estados
const getEstado_equipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const estados = yield estados_equipos_1.default.findAll();
    res.json({ estados });
});
exports.getEstado_equipo = getEstado_equipo;
//# sourceMappingURL=estado_equipo.js.map