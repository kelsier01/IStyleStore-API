import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Clientes = db.define("Cliente", {
  nombre: {
    type: DataTypes.STRING,
  },
  run: {
    type: DataTypes.STRING,
  },
  mail: {
    type: DataTypes.STRING,
  },
  fono: {
    type: DataTypes.INTEGER,
  },
  estado:{
    type: DataTypes.INTEGER,
  },
});

export default Clientes;
