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
  subtotal:{
    type: DataTypes.INTEGER,
  },
  iva:{
    type: DataTypes.INTEGER,
  },
  descuento:{
    type: DataTypes.INTEGER,
  },
  total:{
    type: DataTypes.INTEGER,
  }
});
Garantia.hasMany(Revisiones, { foreignKey: "garantia_id" });

export default Garantia;
