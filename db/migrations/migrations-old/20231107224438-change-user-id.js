'use strict';

const { DataTypes } = require('sequelize');
const {
  CustomerSchema,
  CUSTOMER_TABLE,
} = require('../../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
    //   type: DataTypes.INTEGER,
    //   field: 'user_id',
    //   allowNull: false,
    //   unique: true,
    // });
  },

  async down(queryInterface, Sequelize) {
    //await queryInterface.dropTable(CUSTOMER_TABLE);
  },
};
