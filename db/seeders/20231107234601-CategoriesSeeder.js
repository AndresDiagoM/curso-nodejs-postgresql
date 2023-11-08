'use strict';

const { CategorySchema, CATEGORY_TABLE } = require('../models/category.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(CATEGORY_TABLE, [
      {
        name: 'Food',
        created_at: new Date(),
      },
      {
        name: 'Electronics',
        created_at: new Date(),
      },
      {
        name: 'Fashion',
        created_at: new Date(),
      },
      {
        name: 'Home',
        created_at: new Date(),
      },
      {
        name: 'Sports',
        created_at: new Date(),
      },
      {
        name: 'Health',
        created_at: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(CATEGORY_TABLE, null, {});
  }
};
