import express, { Application } from "express";
import db from "../BD/connection";
import userRoutes from "../rutas/usuario";
import clienteRoutes from "../rutas/cliente";
import authRoutes from "../rutas/auth";
import equipoRoutes from "../rutas/equipo";
import modeloRoutes from "../rutas/modelo";
import estadosRoutes from "../rutas/estado_equipo";
import equipo_preguntasRoutes from "../rutas/equipo_has_pregunta";
import ordenesRoutes from "../rutas/ordenes";
import respuestaRoutes from "../rutas/respuesta";
import serviciosRoutes from "../rutas/servicios";
import revisionesRoutes from "../rutas/revision";
import orden_serviciosRoutes from "../rutas/orden_has_servicios";
import garantiaRoutes from "../rutas/garantia";
import preguntasRoutes from "../rutas/preguntas";
import cors from "cors";

class Server {
  private app: Application;
  private port: string;
  private apiPath = {
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

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8888";
    this.bdConnection();
    this.middlewares();
    this.routes();
  }

  async bdConnection() {
    try {
      await db.authenticate();
      console.log("Database Online");
    } catch (error: any) {
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json()); // Lectura y parceo del body
    this.app.use(express.static("public")); //Directorio Publico
  }

  routes() {
    this.app.use(this.apiPath.login, authRoutes);
    this.app.use(this.apiPath.users, userRoutes);
    this.app.use(this.apiPath.clientes, clienteRoutes);
    this.app.use(this.apiPath.equipos, equipoRoutes);
    this.app.use(this.apiPath.modelos, modeloRoutes);
    this.app.use(this.apiPath.estados, estadosRoutes);
    this.app.use(this.apiPath.equipo_preguntas, equipo_preguntasRoutes);
    this.app.use(this.apiPath.ordenes, ordenesRoutes);
    this.app.use(this.apiPath.respuestas, respuestaRoutes);
    this.app.use(this.apiPath.servicios, serviciosRoutes);
    this.app.use(this.apiPath.revisiones, revisionesRoutes);
    this.app.use(this.apiPath.orden_servicios, orden_serviciosRoutes);
    this.app.use(this.apiPath.garantia, garantiaRoutes);
    this.app.use(this.apiPath.preguntas, preguntasRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor Conectado al puerto = " + this.port);
    });
  }
}

export default Server;
