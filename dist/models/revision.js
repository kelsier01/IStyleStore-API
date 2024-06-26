"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../BD/connection"));
const estados_orden_1 = __importDefault(require("./estados_orden"));
const Revisiones = connection_1.default.define("revisiones", {
    orden_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    responsable: {
        type: sequelize_1.DataTypes.STRING,
    },
    id_estado: {
        type: sequelize_1.DataTypes.STRING,
    },
    observacion: {
        type: sequelize_1.DataTypes.STRING,
    },
    garantia_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
    },
});
Revisiones.belongsTo(estados_orden_1.default, { foreignKey: "id_estado" });
exports.default = Revisiones;
//# sourceMappingURL=revision.js.map