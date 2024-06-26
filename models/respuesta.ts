import { DataTypes } from "sequelize";
import db from "../BD/connection";
import pregunta from "./pregunta";

const Respuestas = db.define("respuestas", {
  pregunta_id: {
    type: DataTypes.INTEGER,
  },
  respuesta: {
    type: DataTypes.STRING,
  },
  orden_id: {
    type: DataTypes.INTEGER,
  },
  check_resp: {
    type: DataTypes.BOOLEAN,
  },
});

export default Respuestas;

Respuestas.belongsTo(pregunta, { foreignKey: "pregunta_id" });
