const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');

const getConnection = require('../../libs/postgres');
const pool = require('../../libs/postgres.pool');
const { models } = require('../../libs/sequelize');

class UsersService  {

  constructor() {
    this.users = [];
    this.pool = pool;
    this.pool.on('error', (err, client) => {
      console.error('Unexpected error on idle client', err);
      process.exit(-1);
    });
  }

  async getAll(limit, offset) {
    const result = await models.User.findAll();
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
    //update using sequelize
    this.find(id);
    try{
      const user = await models.User.update(changes, {
        where: {
          id,
        }
      });
      return user;
    }catch(err){
      throw boom.notFound('error updating user');
    }
  }

  async delete(id) {
    this.find(id);
    try{
      const user = await models.User.destroy({
        where: {
          id,
        }
      });
      return user;
    }catch(err){
      throw boom.notFound('error deleting user');
    }
  }
}

module.exports = UsersService;