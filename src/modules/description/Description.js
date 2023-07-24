const { DataTypes } = require("sequelize");
const sequelize = require("../../db");
const User = require("../users/User");

const Desc = sequelize.define(
  "description",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "description",
  }
);

module.exports = Desc;
