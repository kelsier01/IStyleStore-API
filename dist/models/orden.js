"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../BD/connection"));
const estados_orden_1 = __importDefault(require("./estados_orden"));
const cliente_1 = __importDefault(require("./cliente"));
const equipo_1 = __importDefault(require("./equipo"));
const modelo_1 = __importDefault(require("./modelo"));
const respuesta_1 = __importDefault(require("./respuesta"));
const revision_1 = __importDefault(require("./revision"));
const orden_has_servicios_1 = __importDefault(require("./orden_has_servicios"));
const Orden = connection_1.default.define("Ordene", {
    fecha_entrega: {
        type: sequelize_1.DataTypes.DATE,
    },
    tecnico: {
        type: sequelize_1.DataTypes.STRING,
    },
    cliente_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    fecha_salida: {
        type: sequelize_1.DataTypes.DATE,
    },
    imei: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    metodoPago: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    codigo: {
        type: sequelize_1.DataTypes.STRING,
    },
    id_equipo: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    id_dispositivo: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    estado_dispositivo: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    observacion: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    total_recepcion: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    subtotal: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    iva: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    descuento: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    total: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    id_ultima_garantia: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
    },
});
Orden.belongsTo(estados_orden_1.default, { foreignKey: "estado" });
Orden.belongsTo(cliente_1.default, { foreignKey: "cliente_id" });
Orden.belongsTo(equipo_1.default, { foreignKey: "id_equipo" });
Orden.belongsTo(modelo_1.default, { foreignKey: "id_dispositivo" });
Orden.hasMany(respuesta_1.default, { foreignKey: "orden_id" });
Orden.hasMany(respuesta_1.default, { foreignKey: "orden_id" });
Orden.hasMany(revision_1.default, { foreignKey: "orden_id" });
Orden.hasMany(orden_has_servicios_1.default, { foreignKey: "orden_id" });
exports.default = Orden;
//# sourceMappingURL=orden.js.map