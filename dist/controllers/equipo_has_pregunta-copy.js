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
exports.getEquipos_preguntas = void 0;
const equipos_has_preguntas_1 = __importDefault(require("../models/equipos_has_preguntas"));
const pregunta_1 = __importDefault(require("../models/pregunta"));
const sequelize_1 = require("sequelize");
const getEquipos_preguntas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const preguntas = yield equipos_has_preguntas_1.default.findAll({
        include: pregunta_1.default,
        where: {
            estado: {
                [sequelize_1.Op.ne]: null,
            },
        },
    });
    res.json({ preguntas });
});
exports.getEquipos_preguntas = getEquipos_preguntas;
//# sourceMappingURL=equipo_has_pregunta-copy.js.map