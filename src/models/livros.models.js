import { DataTypes } from "sequelize";
import { connection } from "../config/database.js";

export const Livros = connection.define("livro", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pages: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "S/N",
  },
  available: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  theme: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
