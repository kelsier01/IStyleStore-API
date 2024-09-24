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
exports.deleteServicio = exports.putServicio = exports.postServicio = exports.getServicios = void 0;
const servicios_1 = __importDefault(require("../models/servicios"));
const getServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const servicios = yield servicios_1.default.findAll();
    res.json({ servicios });
});
exports.getServicios = getServicios;
const postServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const servicio = yield servicios_1.default.create(body);
        res.json(servicio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postServicio = postServicio;
const putServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const servicio = yield servicios_1.default.findByPk(id);
        if (!servicio) {
            return res.status(404).json({
                msg: "No existe el servicio"
            });
        }
        yield servicio.update(body);
        res.json(servicio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            mesg: "Contactar con el adminsitrador"
        });
    }
});
exports.putServicio = putServicio;
const deleteServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const servicio = yield servicios_1.default.findByPk(id);
    if (!servicio) {
        return res.status(404).json({
            msg: "No existe un servicio con el id " + id,
        });
    }
    yield servicio.destroy();
    res.json(servicio);
});
exports.deleteServicio = deleteServicio;
//# sourceMappingURL=servicios.js.map