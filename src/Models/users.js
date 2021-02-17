import { DataTypes } from "sequelize";
//DB
import db from "../Config/db.config";

const Users = db.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "Users",
  }
);

export default Users;
