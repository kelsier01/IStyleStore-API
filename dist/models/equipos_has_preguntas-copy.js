"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../BD/connection"));
const servicios_1 = __importDefault(require("./servicios"));
const serviciosOrden = connection_1.default.define("orden_has_servicio", {
    orden_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    servicio_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    responsable: {
        type: sequelize_1.DataTypes.STRING,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
    },
});
serviciosOrden.belongsTo(servicios_1.default, { foreignKey: "servicio_id" });
exports.default = serviciosOrden;
//# sourceMappingURL=equipos_has_preguntas-copy.js.map