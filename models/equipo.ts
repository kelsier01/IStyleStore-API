import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Equipo = db.define("Equipo", {
  nombre: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.INTEGER,
  },
});

export default Equipo;
