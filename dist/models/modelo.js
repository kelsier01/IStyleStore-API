"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../BD/connection"));
const Modelo = connection_1.default.define("Dispositivo", {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    modelo: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    estado: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = Modelo;
//# sourceMappingURL=modelo.js.map