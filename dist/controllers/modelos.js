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
exports.deleteModelo = exports.putModelo = exports.postModelo = exports.getModelos = void 0;
const modelo_1 = __importDefault(require("../models/modelo"));
const getModelos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const modelo = yield modelo_1.default.findAll();
    res.json({ modelo });
});
exports.getModelos = getModelos;
const postModelo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.body;
    try {
        const existeModelo = yield modelo_1.default.findOne({
            where: {
                nombre,
            },
        });
        if (existeModelo) {
            return res.status(400).json({
                msg: "Ya existe un cliente con el nombre " + nombre,
            });
        }
        const modelo = yield modelo_1.default.create(req.body);
        res.json(modelo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postModelo = postModelo;
const putModelo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const modelo = yield modelo_1.default.findByPk(id);
        if (!modelo) {
            return res.status(404).json({
                msg: "No existe un modelo con el id " + id,
            });
        }
        yield modelo.update(body);
        res.json(modelo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putModelo = putModelo;
const deleteModelo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const modelo = yield modelo_1.default.findByPk(id);
    if (!modelo) {
        return res.status(404).json({
            msg: "No existe un equipo con el id " + id,
        });
    }
    yield modelo.destroy();
    res.json(modelo);
});
exports.deleteModelo = deleteModelo;
//# sourceMappingURL=modelos.js.map