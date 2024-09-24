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
exports.putGarantia = exports.postGarantia = exports.getGarantia = void 0;
const garantia_1 = __importDefault(require("../models/garantia"));
//Traer cliente por id
const getGarantia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const garantia = yield garantia_1.default.findByPk(id);
    if (garantia) {
        res.json(garantia);
    }
    else {
        res.status(404).json({
            msg: `No existe la garantia con la id ${id}`,
        });
    }
});
exports.getGarantia = getGarantia;
const postGarantia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Hay que eliminar esto
        console.log(req.body);
        const garantia = yield garantia_1.default.create(req.body);
        res.json(garantia);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postGarantia = postGarantia;
const putGarantia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const garantia = yield garantia_1.default.findByPk(id);
        if (!garantia) {
            return res.status(404).json({
                msg: "No existe una garantia con el id " + id,
            });
        }
        yield garantia.update(body);
        res.json(garantia);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putGarantia = putGarantia;
//# sourceMappingURL=garantia.js.map