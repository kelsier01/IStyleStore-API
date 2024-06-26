"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../BD/connection"));
const Users = connection_1.default.define("User", {
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    },
});
Users.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());
    delete values.password;
    return values;
};
exports.default = Users;
//# sourceMappingURL=usuario.js.map