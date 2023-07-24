"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "description",
      [
        {
          id: 1,
          name: "Darakchi gazetasiga ",
          description: "20023-yil Prezident Saylov adolatli buldi :)",
          userId: 1,
        },
        {
          id: 2,
          name: "So'g'iyona gazetasiga :)",
          description: "Toshkentda jinoyatchi bir kishini otib uldirdi :(",
          userId: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("description", null, {});
  },
};
