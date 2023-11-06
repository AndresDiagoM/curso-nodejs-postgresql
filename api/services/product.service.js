const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');

const pool = require('../../libs/postgres.pool');
const sequelize = require('../../libs/sequelize');
const { models } = require('../../libs/sequelize');

class ProductsService {

  constructor() {

  }

  async getAll() {
    const products = await models.Product.findAll();
    return products;
  }

  async add(product) {
    if(!product || Object.keys(product).length === 0) {
      throw boom.badRequest('invalid data');
    }
    let newProduct = {
      ...product,
      createdAt: new Date(),
    }
    let created = await models.User.create(newProduct);
    return created;
  }

  async find(id) {
    const product = await models.Product.findByPk(id);
    if(!product) {
      throw boom.notFound('product not found');
    }
    // if(product.isBlock) {
    //   throw boom.conflict('product is blocked');
    // }
    return product;
  }

  async update(id, changes) {
    try{
      const product = this.find(id);
      const rta = (await product).update(changes);
      return rta;
    }catch(err){
      throw boom.notFound('error updating product');
    }
  }

  async delete(id){
    try{
      const product = await this.find(id);
      const rta = (await product).destroy();
      return id;
    }catch(err){
      throw boom.notFound('error deleting product');
    }
  }
}

module.exports = ProductsService;