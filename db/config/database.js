const config = require("../../src/shared/config");
module.exports = {
  development: {
    username: config.db.user,
    password: config.db.password,
    database: config.db.name,
    port: config.db.port,
    host: config.db.host,
    dialect: "postgres",
  },
  test: {
    username: config.db.user,
    password: config.db.password,
    database: config.db.name,
    port: config.db.port,
    host: config.db.host,
    dialect: "postgres",
  },
  production: {
    username: config.db.user,
    password: config.db.password,
    database: config.db.name,
    port: config.db.port,
    host: config.db.host,
    dialect: "postgres",
  },
};
