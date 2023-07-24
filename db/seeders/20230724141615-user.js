"use strict";

const { hashSync } = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user",
      [
        {
          first_name: "Javohir",
          last_name: "Muhammadiyev",
          username: "jorj",
          password: hashSync("foobar", 10),
        },
        {
          first_name: "Orzu",
          last_name: "Mirzayev",
          username: "orzu",
          password: hashSync("foobar", 10),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user", null, {});
  },
};
