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
exports.postRevision = exports.getRevisiones_orden = void 0;
const revision_1 = __importDefault(require("../models/revision"));
const estados_orden_1 = __importDefault(require("../models/estados_orden"));
const getRevisiones_orden = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const revisiones = yield revision_1.default.findAll({
        where: {
            orden_id: id,
        },
        include: [estados_orden_1.default],
    });
    res.json({ revisiones });
});
exports.getRevisiones_orden = getRevisiones_orden;
const postRevision = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const revision = yield revision_1.default.create(body);
        res.json(revision);
    }
    catch (error) {
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postRevision = postRevision;
//# sourceMappingURL=revisiones.js.map