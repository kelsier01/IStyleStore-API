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
exports.putOrden = exports.postOrden = exports.postOrden_search = exports.getOrden = exports.getOrdenes_pendientes = exports.getOrdenes = void 0;
const orden_1 = __importDefault(require("../models/orden"));
const estados_orden_1 = __importDefault(require("../models/estados_orden"));
const sequelize_1 = require("sequelize");
const cliente_1 = __importDefault(require("../models/cliente"));
const equipo_1 = __importDefault(require("../models/equipo"));
const modelo_1 = __importDefault(require("../models/modelo"));
const respuesta_1 = __importDefault(require("../models/respuesta"));
const pregunta_1 = __importDefault(require("../models/pregunta"));
const revision_1 = __importDefault(require("../models/revision"));
const orden_has_servicios_1 = __importDefault(require("../models/orden_has_servicios"));
const servicios_1 = __importDefault(require("../models/servicios"));
const getOrdenes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = 10, desde = 0 } = req.query;
    const ordenes = yield orden_1.default.findAll({
        where: {
            estado: 5,
        },
        include: [estados_orden_1.default, cliente_1.default, equipo_1.default, modelo_1.default],
        limit: Number(limite),
        offset: Number(desde),
    });
    const total = yield orden_1.default.count();
    res.json({ total, ordenes });
});
exports.getOrdenes = getOrdenes;
const getOrdenes_pendientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ordenes = yield orden_1.default.findAll({
        where: {
            estado: {
                [sequelize_1.Op.lt]: 5,
            },
        },
        include: [estados_orden_1.default, cliente_1.default, equipo_1.default, modelo_1.default],
    });
    const total = yield orden_1.default.count();
    const totalIniciadas = yield orden_1.default.count({
        where: { estado: 1 },
    });
    const totalRevision = yield orden_1.default.count({
        where: { estado: 2 },
    });
    const totalRetiro = yield orden_1.default.count({
        where: { estado: 3 },
    });
    res.json({ total, totalIniciadas, totalRevision, totalRetiro, ordenes });
});
exports.getOrdenes_pendientes = getOrdenes_pendientes;
const getOrden = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const orden = yield orden_1.default.findOne({
        where: { id },
        include: [
            estados_orden_1.default,
            cliente_1.default,
            equipo_1.default,
            modelo_1.default,
            {
                model: respuesta_1.default,
                include: [pregunta_1.default],
            },
        ],
    });
    res.json({ orden });
});
exports.getOrden = getOrden;
const postOrden_search = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, run, nombre } = req.body;
    if (id) {
        const orden = yield orden_1.default.findOne({
            where: { id },
            include: [
                estados_orden_1.default,
                cliente_1.default,
                equipo_1.default,
                modelo_1.default,
                { model: revision_1.default, include: [estados_orden_1.default] },
                { model: orden_has_servicios_1.default, include: [servicios_1.default] },
            ],
        });
        res.json({ orden, rows: 1 });
    }
    else if (run) {
        const orden = yield orden_1.default.findAll({
            include: [
                estados_orden_1.default,
                {
                    model: cliente_1.default,
                    where: {
                        run,
                    },
                },
                equipo_1.default,
                modelo_1.default,
                { model: revision_1.default, include: [estados_orden_1.default] },
                { model: orden_has_servicios_1.default, include: [servicios_1.default] },
            ],
        });
        res.json({ orden, rows: 2 });
    }
    else if (nombre) {
        const orden = yield orden_1.default.findAll({
            include: [
                estados_orden_1.default,
                {
                    model: cliente_1.default,
                    where: {
                        nombre: {
                            [sequelize_1.Op.like]: "%" + nombre + "%",
                        },
                    },
                },
                equipo_1.default,
                modelo_1.default,
                { model: revision_1.default, include: [estados_orden_1.default] },
                { model: orden_has_servicios_1.default, include: [servicios_1.default] },
            ],
        });
        res.json({ orden, rows: 2 });
    }
    else {
        res.json({ msg: "Error" });
    }
});
exports.postOrden_search = postOrden_search;
const postOrden = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const ord = yield orden_1.default.create(body);
        res.json(ord);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postOrden = postOrden;
const putOrden = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const orden = yield orden_1.default.findByPk(id);
        if (!orden) {
            return res.status(404).json({
                msg: "No existe una orden con el id " + id,
            });
        }
        yield orden.update(body);
        res.json(orden);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putOrden = putOrden;
//# sourceMappingURL=ordenes.js.map