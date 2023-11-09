'use strict';

const { UserSchema, USER_TABLE } = require('../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(USER_TABLE, [
      {
        name: 'John Doe',
        last_name: 'Doe',
        email: 'email11@mail.com',
        password: '123456',
        role: 'admin',
        is_block: false,
        created_at: new Date(),
      },
      {
        name: 'John Newman',
        last_name: 'Doe',
        email: 'jhondoe@mail.com',
        password: '123456',
        role: 'user',
        is_block: false,
        created_at: new Date(),
      },
      {
        name: 'Steve',
        last_name: 'Jobs',
        email: 'steveApple@appe-inc.es',
        password: '123456',
        role: 'user',
        is_block: false,
        created_at: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(USER_TABLE, null, {});
  }
};
