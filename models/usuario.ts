import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Users = db.define("User", {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.BOOLEAN,
  },
  password: {
    type: DataTypes.STRING,
  },
});
Users.prototype.toJSON = function () {
  var values = Object.assign({}, this.get());

  delete values.password;
  return values;
};
export default Users;
