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
exports.postRespuestas = exports.getRespuestas_orden = exports.getRespuestas = void 0;
const respuesta_1 = __importDefault(require("../models/respuesta"));
const getRespuestas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const respuestas = yield respuesta_1.default.findAll({
        limit: 10,
    });
    res.json({ respuestas });
});
exports.getRespuestas = getRespuestas;
const getRespuestas_orden = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const respuestas = yield respuesta_1.default.findAll({
        where: {
            orden_id: id,
        },
    });
    res.json({ respuestas });
});
exports.getRespuestas_orden = getRespuestas_orden;
const postRespuestas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    console.log(body);
    try {
        const resp = yield respuesta_1.default.bulkCreate(body);
        res.json(resp);
    }
    catch (error) {
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postRespuestas = postRespuestas;
//# sourceMappingURL=respuestas.js.map