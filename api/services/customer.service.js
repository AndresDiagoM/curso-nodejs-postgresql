const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');

const { models } = require('../../libs/sequelize');

class CustomersService  {

  constructor() {

  }

  async getAll(limit, offset) {
    const result = await models.Customer.findAll({
      include: ['user', 'orders'],
    });
    return result;
  }

  async add(customer) {
    if(!customer || Object.keys(customer).length === 0) {
      throw boom.badRequest('invalid data');
    }
    let created = await models.Customer.create(customer, {
      include: ['user'],
    });
    return created;
  }

  async find(id) {
    const customer = await models.Customer.findByPk(id);
    if(!customer) {
      throw boom.notFound('customer not found');
    }
    return customer;
  }

  async update(id, changes) {
    this.find(id);
    try{
      const rta = await models.Customer.update(changes, {
        where: {id}
      });
      return rta;
    }catch(err){
      throw boom.notFound('error updating user');
    }
  }

  async delete(id) {
    try{
      const user = await this.find(id);
      const rta = (await user).destroy();
      return id;
    }catch(err){
      throw boom.notFound('error deleting user');
    }
  }
}

module.exports = CustomersService;