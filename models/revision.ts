import { DataTypes } from "sequelize";
import db from "../BD/connection";
import estado_orden from "./estados_orden";

const Revisiones = db.define("revisiones", {
  orden_id: {
    type: DataTypes.INTEGER,
  },
  responsable: {
    type: DataTypes.STRING,
  },
  id_estado: {
    type: DataTypes.STRING,
  },
  observacion: {
    type: DataTypes.STRING,
  },
  garantia_id: {
    type: DataTypes.INTEGER,
  },
  created_at: {
    type: DataTypes.DATE,
  },
});

Revisiones.belongsTo(estado_orden, { foreignKey: "id_estado" });

export default Revisiones;
