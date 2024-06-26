"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarjwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generarjwt = (uid) => {
    const privateKey = process.env.SECRETORPRIVATEKEY;
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign(uid, privateKey, { expiresIn: "365d" }, (error, token) => {
            if (error) {
                console.log(error);
                reject("No se pudo generar el token");
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generarjwt = generarjwt;
//# sourceMappingURL=generarJWT.js.map