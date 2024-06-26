import { DataTypes } from "sequelize";
import db from "../BD/connection";
import pregunta from "./pregunta";
import Equipo from "./equipo";

const equipoPeguntas = db.define("equipo_has__preguntas", {
  id_equipo: {
    type: DataTypes.INTEGER,
  },
  id_pregunta: {
    type: DataTypes.INTEGER,
  },
  estado: {
    type: DataTypes.INTEGER,
  },
  habilitado:{
    type:DataTypes.INTEGER,
  },
});
//Defino que en la tabla equipos_has_preguntas hay una foreign key que hace referencia a la tabla pregunta al atributo id_pregunta
equipoPeguntas.belongsTo(pregunta, { foreignKey: "id_pregunta" });
equipoPeguntas.belongsTo(Equipo, {foreignKey: "id_equipo"});
export default equipoPeguntas;
