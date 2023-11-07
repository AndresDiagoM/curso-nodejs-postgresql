'use strict';

const { CustomerSchema, CUSTOMER_TABLE } = require('../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(CUSTOMER_TABLE, [
      {
        name: 'Customer 1',
        last_name: 'Customer 1',
        email: 'custom1@gmail.com',
        address: 'Address 1',
        birth_date: '1990-01-01',
        created_at: new Date(),
        user_id: 1,
      },
      {
        name: 'Customer 2',
        last_name: 'Customer 2',
        email: 'custom22@gmail.com',
        address: 'Address 2',
        birth_date: '1990-01-01',
        created_at: new Date(),
        user_id: 3,
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(CUSTOMER_TABLE, null, {});
  }
};
