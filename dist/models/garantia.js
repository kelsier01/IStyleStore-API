"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../BD/connection"));
const revision_1 = __importDefault(require("./revision"));
const Garantia = connection_1.default.define("garantias", {
    fecha: {
        type: sequelize_1.DataTypes.DATE,
    },
    orden_id: {
        type: sequelize_1.DataTypes.STRING,
    },
});
Garantia.hasMany(revision_1.default, { foreignKey: "garantia_id" });
exports.default = Garantia;
//# sourceMappingURL=garantia.js.map