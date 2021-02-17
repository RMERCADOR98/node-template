import { DataTypes } from "sequelize";
//DB
import db from "../Config/db.config";

const Posts = db.define(
  "Post",
  {
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "Posts",
  }
);

export default Posts;
