import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Servicios = db.define("servicio", {
  nombre: {
    type: DataTypes.STRING,
  },
  precio: {
    type: DataTypes.INTEGER,
  },
  estado:{
    type: DataTypes.INTEGER,
  },
});

export default Servicios;
