'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Anything goes!",
        image: "anythinggoes",
        description: "If none of your ideas fit our labels, you're doing it right. New ideas are always welcome here."
      },
      {
        name: "Entertain me!",
        image: "entertainme",
        description: "Movies, art, books, etc. that you simply must witness before you die."
      },
      {
        name: "It's never too late!",
        image: "itsnevertoolate",
        description: "Don't be shy. Let's talk about our feelings. Get it off your chest while you're still alive."
      },
      {
        name: "Let's get wild!",
        image: "letsgetwild",
        description: "This is for the unwell. The ultimate adrenaline junkie. The ultimate buck it, if you will."
      },
      {
        name: "X marks the spot!",
        image: "xmarksthespot",
        description: "Breathtaking stops along the journey that is life. Enjoy the world before you reach the final destination that is death."
      },
      {
        name: "Yummy!",
        image: "yummy",
        description: "Calling all foodies! From five star cuisines to your grandma's peach cobbler, give us dishes that are to die for."
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  }
};
