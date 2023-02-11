'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Anything goes!",
        image: "anythinggoes",
        description: ""
      },
      {
        name: "Entertain me!",
        image: "entertainme",
        description: ""
      },
      {
        name: "It's never too late!",
        image: "itsnevertoolate",
        description: ""
      },
      {
        name: "Let's get wild!",
        image: "letsgetwild",
        description: ""
      },
      {
        name: "X marks the spot!",
        image: "xmarksthespot",
        description: ""
      },
      {
        name: "Yummy!",
        image: "yummy",
        description: ""
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  }
};
