"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("../BD/connection"));
const usuario_1 = __importDefault(require("../rutas/usuario"));
const cliente_1 = __importDefault(require("../rutas/cliente"));
const auth_1 = __importDefault(require("../rutas/auth"));
const equipo_1 = __importDefault(require("../rutas/equipo"));
const modelo_1 = __importDefault(require("../rutas/modelo"));
const estado_equipo_1 = __importDefault(require("../rutas/estado_equipo"));
const equipo_has_pregunta_1 = __importDefault(require("../rutas/equipo_has_pregunta"));
const ordenes_1 = __importDefault(require("../rutas/ordenes"));
const respuesta_1 = __importDefault(require("../rutas/respuesta"));
const servicios_1 = __importDefault(require("../rutas/servicios"));
const revision_1 = __importDefault(require("../rutas/revision"));
const orden_has_servicios_1 = __importDefault(require("../rutas/orden_has_servicios"));
const garantia_1 = __importDefault(require("../rutas/garantia"));
const preguntas_1 = __importDefault(require("../rutas/preguntas"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPath = {
            users: "/api/users",
            login: "/api/auth",
            clientes: "/api/clientes",
            equipos: "/api/equipos",
            modelos: "/api/modelos",
            estados: "/api/estados",
            equipo_preguntas: "/api/equipo_preguntas",
            ordenes: "/api/ordenes",
            respuestas: "/api/respuestas",
            servicios: "/api/servicios",
            revisiones: "/api/revisiones",
            orden_servicios: "/api/orden_servicios",
            garantia: "/api/garantia",
            preguntas: "/api/preguntas",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8888";
        this.bdConnection();
        this.middlewares();
        this.routes();
    }
    bdConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log("Database Online");
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json()); // Lectura y parceo del body
        this.app.use(express_1.default.static("public")); //Directorio Publico
    }
    routes() {
        this.app.use(this.apiPath.login, auth_1.default);
        this.app.use(this.apiPath.users, usuario_1.default);
        this.app.use(this.apiPath.clientes, cliente_1.default);
        this.app.use(this.apiPath.equipos, equipo_1.default);
        this.app.use(this.apiPath.modelos, modelo_1.default);
        this.app.use(this.apiPath.estados, estado_equipo_1.default);
        this.app.use(this.apiPath.equipo_preguntas, equipo_has_pregunta_1.default);
        this.app.use(this.apiPath.ordenes, ordenes_1.default);
        this.app.use(this.apiPath.respuestas, respuesta_1.default);
        this.app.use(this.apiPath.servicios, servicios_1.default);
        this.app.use(this.apiPath.revisiones, revision_1.default);
        this.app.use(this.apiPath.orden_servicios, orden_has_servicios_1.default);
        this.app.use(this.apiPath.garantia, garantia_1.default);
        this.app.use(this.apiPath.preguntas, preguntas_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor Conectado al puerto = " + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map