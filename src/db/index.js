const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "orm7",
  password: "1234",
  dialect: "postgres",
  host: "127.0.0.1",
  username: "postgres",
  port: 5432,
});

module.exports = sequelize;
