'use strict';

const { ProductSchema, PRODUCT_TABLE } = require('../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(PRODUCT_TABLE, [
      {
        name: 'Computador',
        price: 144000,
        image: 'https://picsum.photos/200/300',
        description: 'Computador de escritorio',
        created_at: new Date(),
        category_id: 2,
      },
      {
        name: 'Portatil',
        price: 244000,
        image: 'https://picsum.photos/200/300',
        description: 'Computador portatil',
        created_at: new Date(),
        category_id: 2,
      },
      {
        name: 'Mouse',
        price: 44000,
        image: 'https://picsum.photos/200/300',
        description: 'Mouse inalambrico',
        created_at: new Date(),
        category_id: 2,
      },
      {
        name: 'Teclado',
        price: 44000,
        image: 'https://picsum.photos/200/300',
        description: 'Teclado inalambrico',
        created_at: new Date(),
        category_id: 2,
      },
      {
        name: 'Camiseta',
        price: 44000,
        image: 'https://picsum.photos/200/300',
        description: 'Camiseta de algodon',
        created_at: new Date(),
        category_id: 3,
      },
      {
        name: 'Pantalon',
        price: 44000,
        image: 'https://picsum.photos/200/300',
        description: 'Pantalon de mezclilla',
        created_at: new Date(),
        category_id: 3,
      },
      {
        name: 'Zapatos',
        price: 44000,
        image: 'https://picsum.photos/200/300',
        description: 'Zapatos de cuero',
        created_at: new Date(),
        category_id: 3,
      },
      {
        name: 'Cama',
        price: 44000,
        image: 'https://picsum.photos/200/300',
        description: 'Cama de madera',
        created_at: new Date(),
        category_id: 4,
      },
      {
        name: 'Sofa',
        price: 44000,
        image: 'https://picsum.photos/200/300',
        description: 'Sofa de cuero',
        created_at: new Date(),
        category_id: 4,
      },
      {
        name: 'Mesa',
        price: 44000,
        image: 'https://picsum.photos/200/300',
        description: 'Mesa de madera',
        created_at: new Date(),
        category_id: 4,
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(PRODUCT_TABLE, null, {});
  }
};
