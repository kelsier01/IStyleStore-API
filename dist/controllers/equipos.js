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
exports.deleteEquipo = exports.putEquipo = exports.postEquipo = exports.getEquipos = void 0;
const equipo_1 = __importDefault(require("../models/equipo"));
//Recibir equipos disponibles
const getEquipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const equipos = yield equipo_1.default.findAll();
    res.json({ equipos });
});
exports.getEquipos = getEquipos;
//Crear equipos
const postEquipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Crear variable nombre que almacenara el valor del atributo del mismo nombre desde el cuerpo del request
    const { nombre } = req.body;
    try {
        //Antes de crear un nuevo equipo tenemos que verificar que el equipo exita o no en la base de datos
        const existeEquipo = yield equipo_1.default.findOne({
            //Con Sequelize realizo querys usamos findOne para buscar un equipo donde el nombre se el nombre ingresado
            where: {
                nombre,
            },
        });
        //Hacemos la verificacion de si existe el equipo o no
        //Si existe
        if (existeEquipo) {
            return res.status(400).json({
                msg: "Ya existe un equipo con el nombre " + nombre,
            });
        }
        //Si no existe el equipo
        const marca = yield equipo_1.default.create(req.body);
        res.json(marca);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postEquipo = postEquipo;
const putEquipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const equipo = yield equipo_1.default.findByPk(id);
        if (!equipo) {
            return res.status(404).json({
                msg: "No existe un equipo con el id " + id,
            });
        }
        yield equipo.update(body);
        res.json(equipo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putEquipo = putEquipo;
const deleteEquipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const equipo = yield equipo_1.default.findByPk(id);
    if (!equipo) {
        return res.status(404).json({
            msg: "No existe un equipo con el id " + id,
        });
    }
    yield equipo.destroy();
    res.json(equipo);
});
exports.deleteEquipo = deleteEquipo;
//# sourceMappingURL=equipos.js.map