import { DataTypes } from "sequelize";
import db from "../BD/connection";
import Servicios from "./servicios";

const serviciosOrden = db.define("orden_has_servicio", {
  orden_id: {
    type: DataTypes.INTEGER,
  },
  servicio_id: {
    type: DataTypes.INTEGER,
  },
  responsable: {
    type: DataTypes.STRING,
  },
  garantia_id: {
    type: DataTypes.INTEGER,
  },
  created_at: {
    type: DataTypes.DATE,
  },
});

serviciosOrden.belongsTo(Servicios, { foreignKey: "servicio_id" });
export default serviciosOrden;
