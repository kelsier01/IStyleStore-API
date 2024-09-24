"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("ST_ISTYLE_BD", "root", "", {
    host: "localhost",
    dialect: "mysql",
    define: {
        createdAt: false,
        updatedAt: false,
    },
});
exports.default = db;
//# sourceMappingURL=connection.js.map