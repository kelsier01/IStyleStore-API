import { DataTypes } from "sequelize";
import db from "../BD/connection";

const estado_equipos = db.define("estado_equipo", {
  nombre: {
    type: DataTypes.STRING,
  },
});

export default estado_equipos;
