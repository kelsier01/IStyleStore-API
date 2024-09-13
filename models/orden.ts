import { DataTypes } from "sequelize";
import db from "../BD/connection";
import estado_orden from "./estados_orden";
import Clientes from "./cliente";
import equipo from "./equipo";
import Modelo from "./modelo";
import Respuestas from "./respuesta";
import Revisiones from "./revision";
import serviciosOrden from "./orden_has_servicios";

const Orden = db.define("Ordene", {
  fecha_entrega: {
    type: DataTypes.DATE,
  },
  tecnico: {
    type: DataTypes.STRING,
  },
  cliente_id: {
    type: DataTypes.INTEGER,
  },
  fecha_salida: {
    type: DataTypes.DATE,
  },
  imei: {
    type: DataTypes.INTEGER,
  },
  metodoPago: {
    type: DataTypes.INTEGER,
  },
  codigo: {
    type: DataTypes.STRING,
  },
  id_equipo: {
    type: DataTypes.INTEGER,
  },
  id_dispositivo: {
    type: DataTypes.INTEGER,
  },
  estado_dispositivo: {
    type: DataTypes.INTEGER,
  },
  observacion: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.INTEGER,
  },
  total_recepcion:{
    type: DataTypes.INTEGER,
  },
  subtotal: {
    type: DataTypes.INTEGER,
  },
  iva: {
    type: DataTypes.INTEGER,
  },
  descuento: {
    type: DataTypes.INTEGER,
  },
  total: {
    type: DataTypes.INTEGER,
  },
  id_ultima_garantia: {
    type: DataTypes.INTEGER,
  },
  created_at: {
    type: DataTypes.DATE,
  },
});

Orden.belongsTo(estado_orden, { foreignKey: "estado" });
Orden.belongsTo(Clientes, { foreignKey: "cliente_id" });
Orden.belongsTo(equipo, { foreignKey: "id_equipo" });
Orden.belongsTo(Modelo, { foreignKey: "id_dispositivo" });
Orden.hasMany(Respuestas, { foreignKey: "orden_id" });
Orden.hasMany(Respuestas, { foreignKey: "orden_id" });
Orden.hasMany(Revisiones, { foreignKey: "orden_id" });
Orden.hasMany(serviciosOrden, { foreignKey: "orden_id" });

export default Orden;
