const { DataTypes } = require("sequelize");
const sequelize = require("../../db");
const Desc = require("../description/Description");
const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 300,
    },
  },
  {
    timestamps: false,
    tableName: "user",
  }
);
User.hasMany(Desc, { as: "description" });
Desc.belongsTo(User, { foreignKey: "userId" });

module.exports = User;
