const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');

const getConnection = require('../../libs/postgres');
const pool = require('../../libs/postgres.pool');
const { models } = require('../../libs/sequelize');

class UsersService  {

  constructor() {}

  async getAll(limit, offset) {
    const result = await models.User.findAll({
      include: ['customer'],
    });
    return result;
  }

  async add(user) {
    if(!user || Object.keys(user).length === 0) {
      throw boom.badRequest('invalid data');
    }
    let newUser = {
      ...user,
      createdAt: new Date(),
    }
    let created = await models.User.create(newUser);
    return created;
  }

  async find(id) {
    const user = await models.User.findByPk(id);
    if(!user) {
      throw boom.notFound('user not found');
    }
    // if(user.isBlock) {
    //   throw boom.conflict('user is blocked');
    // }
    return user;
  }

  async update(id, changes) {
    this.find(id);
    try{
      const rta = await models.User.update(changes, {
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

module.exports = UsersService;