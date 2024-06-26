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
exports.deleteUsuario = exports.putCliente = exports.postCliente = exports.getCliente_rut = exports.getCliente = exports.getClientes = void 0;
const cliente_1 = __importDefault(require("../models/cliente"));
//Traer todos los clientes en json
const getClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientes = yield cliente_1.default.findAll();
    res.json({ clientes });
});
exports.getClientes = getClientes;
//Traer cliente por id
const getCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cliente = yield cliente_1.default.findByPk(id);
    if (cliente) {
        res.json(cliente);
    }
    else {
        res.status(404).json({
            msg: `No existe el usuario con la id ${id}`,
        });
    }
});
exports.getCliente = getCliente;
//Traer cliente por RUN
const getCliente_rut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { run } = req.params;
    console.log(run);
    const cliente = yield cliente_1.default.findOne({
        where: {
            run,
        },
    });
    // Si el cliente exito, devolver respuesta en json
    if (cliente) {
        res.json(cliente);
    }
    else {
        //Si no existe, mensaje run no registrado
        res.status(404).json({
            msg: `El cliente con el run ${run} no registra datos en nuestra base de datos.`,
        });
    }
});
exports.getCliente_rut = getCliente_rut;
//Crear nuevo cliente
const postCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { run } = req.body;
    try {
        const existeRut = yield cliente_1.default.findOne({
            where: {
                run,
            },
        });
        if (existeRut) {
            return res.status(400).json({
                msg: "Ya existe un cliente con el rut " + run,
            });
        }
        //Crear nuevo cliente con datos del request body
        const cliente = yield cliente_1.default.create(req.body);
        res.json(cliente);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postCliente = postCliente;
const putCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const cliente = yield cliente_1.default.findByPk(id);
        if (!cliente) {
            return res.status(404).json({
                msg: "No existe un usuario con el id " + id,
            });
        }
        yield cliente.update(body);
        res.json(cliente);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putCliente = putCliente;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield cliente_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: "No existe un usuario con el id " + id,
        });
    }
    yield usuario.destroy();
    res.json(usuario);
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=clientes.js.map