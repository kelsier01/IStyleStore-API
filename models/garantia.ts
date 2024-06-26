import { DataTypes } from "sequelize";
import db from "../BD/connection";
import Revisiones from "./revision";

const Garantia = db.define("garantias", {
  fecha: {
    type: DataTypes.DATE,
  },
  orden_id: {
    type: DataTypes.STRING,
  },
});

Garantia.hasMany(Revisiones, { foreignKey: "garantia_id" });

export default Garantia;
