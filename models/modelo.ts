import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Modelo = db.define("Dispositivo", {
  nombre: {
    type: DataTypes.STRING,
  },
  modelo: {
    type: DataTypes.INTEGER,
  },
  estado:{
    type: DataTypes.INTEGER
  }
});

export default Modelo;
