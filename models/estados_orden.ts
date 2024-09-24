import { DataTypes } from "sequelize";
import db from "../BD/connection";

const estado_orden = db.define("estados_ordene", {
  nombre_estado: {
    type: DataTypes.STRING,
  },
});

export default estado_orden;
