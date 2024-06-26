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
exports.putEquipo_preguntas = exports.postEquipo_preguntas = exports.getEquipos_preguntas = void 0;
//Se importa los modelo de equipo_has_preguntas
const equipos_has_preguntas_1 = __importDefault(require("../models/equipos_has_preguntas"));
//Se importa el modelo de la tabla pregunta
const pregunta_1 = __importDefault(require("../models/pregunta"));
const equipo_1 = __importDefault(require("../models/equipo"));
const sequelize_1 = require("sequelize");
const getEquipos_preguntas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const preguntas = yield equipos_has_preguntas_1.default.findAll({
        include: [
            {
                model: pregunta_1.default,
                where: {
                    estado: {
                        [sequelize_1.Op.ne]: null,
                    },
                },
            },
            {
                model: equipo_1.default,
                where: {
                    estado: {
                        [sequelize_1.Op.ne]: null,
                    },
                },
            },
        ],
        where: {
            estado: {
                [sequelize_1.Op.ne]: null,
            },
        },
    });
    res.json({ preguntas });
});
exports.getEquipos_preguntas = getEquipos_preguntas;
const postEquipo_preguntas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const equipo_has_pregunta = yield equipos_has_preguntas_1.default.create(req.body);
    res.json(equipo_has_pregunta);
});
exports.postEquipo_preguntas = postEquipo_preguntas;
const putEquipo_preguntas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const equipo_has_pregunta = yield equipos_has_preguntas_1.default.findByPk(id);
        if (!equipo_has_pregunta) {
            return res.status(404).json({
                msg: "No existe un equipo_pregunta con el id " + id,
            });
        }
        yield equipo_has_pregunta.update(body);
        res.json(equipo_has_pregunta);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putEquipo_preguntas = putEquipo_preguntas;
//# sourceMappingURL=equipo_has_pregunta.js.map