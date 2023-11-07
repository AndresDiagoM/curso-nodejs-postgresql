'use strict';

const { ProductSchema, PRODUCT_TABLE } = require('../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(PRODUCT_TABLE, [
      {
        name: 'Product 1',
        price: 1000,
        image: 'https://picsum.photos/200/300',
        created_at: new Date(),
      },
      {
        name: 'Product 2',
        price: 2000,
        image: 'https://picsum.photos/200/300',
        created_at: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(PRODUCT_TABLE, null, {});
  }
};
