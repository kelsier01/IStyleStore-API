"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../BD/connection"));
const pregunta_1 = __importDefault(require("./pregunta"));
const Respuestas = connection_1.default.define("respuestas", {
    pregunta_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    respuesta: {
        type: sequelize_1.DataTypes.STRING,
    },
    orden_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    check_resp: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
});
exports.default = Respuestas;
Respuestas.belongsTo(pregunta_1.default, { foreignKey: "pregunta_id" });
//# sourceMappingURL=respuesta.js.map