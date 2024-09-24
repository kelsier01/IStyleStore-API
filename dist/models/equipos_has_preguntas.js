"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../BD/connection"));
const pregunta_1 = __importDefault(require("./pregunta"));
const equipo_1 = __importDefault(require("./equipo"));
const equipoPeguntas = connection_1.default.define("equipo_has__preguntas", {
    id_equipo: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    id_pregunta: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    estado: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    habilitado: {
        type: sequelize_1.DataTypes.INTEGER,
    },
});
//Defino que en la tabla equipos_has_preguntas hay una foreign key que hace referencia a la tabla pregunta al atributo id_pregunta
equipoPeguntas.belongsTo(pregunta_1.default, { foreignKey: "id_pregunta" });
equipoPeguntas.belongsTo(equipo_1.default, { foreignKey: "id_equipo" });
exports.default = equipoPeguntas;
//# sourceMappingURL=equipos_has_preguntas.js.map