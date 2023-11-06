const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');

const pool = require('../../libs/postgres.pool');
const sequelize = require('../../libs/sequelize');

class ProductsService {

  constructor() {
    this.products = [];
    this.pool = pool;
    this.pool.on('error', (err, client) => {
      console.error('Unexpected error on idle client', err);
      process.exit(-1);
    });
  }

  async getAll() {
    const query = 'SELECT * FROM task';
    // const result = await this.pool.query(query); //
    const [data, metadata] = await sequelize.query(query);
    return {data};
    // return result.rows;
  }

  async add(product) {
    if(!product || Object.keys(product).length === 0) {
      throw boom.badRequest('invalid data');
    }
    let newProduct = {
      id: faker.string.uuid(),
      ...product,
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find(id) {
    const product = this.products.find(item => item.id === id);
    if(!product) {
      throw boom.notFound('product not found');
    }
    if(product.isBlock) {
      throw boom.conflict('product is blocked');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('product not found'); // manejar errores con boom, devuelve error 404
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return {id};
  }
}

module.exports = ProductsService;