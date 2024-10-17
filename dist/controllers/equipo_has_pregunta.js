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
exports.deshabilitarPregunta = exports.putEquipo_preguntas = exports.postEquipo_preguntas = exports.getEquipos_preguntas = void 0;
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
    try {
        const { id_pregunta, id_equipo, estado } = req.body;
        // Verificar si ya existe un registro con el mismo id, id_pregunta e id_equipo
        const existingRecord = yield equipos_has_preguntas_1.default.findOne({
            where: {
                id_pregunta,
                id_equipo,
                estado
            }
        });
        if (existingRecord) {
            if (existingRecord.habilitado === 1) {
                return res.status(400).json({
                    msg: "Ya existe un registro habilitado con esta combinación de id, pregunta y equipo"
                });
            }
            else if (existingRecord.habilitado === 0) {
                // Actualizar el registro existente
                yield existingRecord.update({ habilitado: 1 });
                return res.status(200).json({
                    msg: "El registro ha sido habilitado",
                    equipo_has_pregunta: existingRecord
                });
            }
        }
        // Crear el nuevo registro
        const equipo_has_pregunta = yield equipos_has_preguntas_1.default.create({
            id_pregunta,
            id_equipo,
            estado,
        });
        res.status(201).json(equipo_has_pregunta);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error al crear o actualizar el registro. Hable con el administrador."
        });
    }
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
const deshabilitarPregunta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, estado } = req.params;
    try {
        const resultado = yield equipos_has_preguntas_1.default.update({ habilitado: 0 }, {
            where: {
                id_pregunta: id,
                estado: estado
            }
        });
        res.json({
            msg: `Se dehabilitaron ${resultado[0]} registros con id_pregunta ${id}`,
            actualizados: resultado[0]
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error al actualizar los registros. Hable con el administrador."
        });
    }
});
exports.deshabilitarPregunta = deshabilitarPregunta;
//# sourceMappingURL=equipo_has_pregunta.js.map