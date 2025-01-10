import { DataTypes } from "sequelize";
import { connection } from "../config/database.js";

export const Users = connection.define('user', {
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      password:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone:{
        type: DataTypes.STRING,
        allowNull: true
      },
      role:{
        type: DataTypes.STRING,
        defaultValue: "Standard"
      }
})