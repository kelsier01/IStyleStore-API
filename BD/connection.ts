import { Sequelize } from "sequelize";

const db = new Sequelize("ST_ISTYLE_BD", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: {
    createdAt: false,
    updatedAt: false,
  },
});

export default db;
