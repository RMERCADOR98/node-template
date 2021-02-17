import { Sequelize } from "sequelize";

const db = new Sequelize("reminder", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default db;
