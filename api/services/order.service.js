const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');

const { models } = require('../../libs/sequelize');

class OrdersService  {

  constructor() {}

  async getAll(limit, offset) {
    const result = await models.Order.findAll({
      include: ['customer'],
    });
    return result;
  }

  async add(order) {
    if(!order || Object.keys(order).length === 0) {
      throw boom.badRequest('invalid data');
    }
    let neworder = {
      ...order,
      createdAt: new Date(),
    }
    let created = await models.Order.create(neworder);
    return created;
  }

  async find(id) {
    const order = await models.Order.findByPk(id, {
      include: [{
        model: models.Customer,
        as: 'customer',
        include: ['user'], // anidar relaciones
      }],
    });
    if(!order) {
      throw boom.notFound('order not found');
    }
    return order;
  }

  async update(id, changes) {
    this.find(id);
    try{
      const rta = await models.Order.update(changes, {
        where: {id}
      });
      return rta;
    }catch(err){
      throw boom.notFound('error updating order');
    }
  }

  async delete(id) {
    try{
      const order = await this.find(id);
      const rta = (await order).destroy();
      return id;
    }catch(err){
      throw boom.notFound('error deleting order');
    }
  }
}

module.exports = OrdersService;