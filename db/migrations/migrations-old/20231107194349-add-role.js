'use strict';

const { UserSchema, USER_TABLE } = require('../../models/user.model');
const { ProductSchema, PRODUCT_TABLE } = require('../../models/product.model');

//it's a bad practice to use schemas in migrations

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(USER_TABLE, 'role', {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: 'customer',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(USER_TABLE, 'role');
  },
};
