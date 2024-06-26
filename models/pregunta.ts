import { DataTypes } from "sequelize";
import db from "../BD/connection";

const pregunta = db.define("preguntas", {
  descripcion: {
    type: DataTypes.STRING,
  },
  estado:{
    type: DataTypes.INTEGER,
  },
});

export default pregunta;
