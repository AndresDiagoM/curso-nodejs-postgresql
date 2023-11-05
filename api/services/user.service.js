const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');

const getConnection = require('../../libs/postgres');
const pool = require('../../libs/postgres.pool');

class UsersService  {

  constructor() {
    this.users = [];
    // this.generate();
    this.pool = pool;
    this.pool.on('error', (err, client) => {
      console.error('Unexpected error on idle client', err);
      process.exit(-1);
    });
  }

  // generate(){
  //   let size = 10;
  //   for(let i=0; i<size; i++){
  //     this.users.push({
  //       id: faker.string.uuid(),
  //       name: faker.person.firstName(),
  //       lastName: faker.person.lastName(),
  //       email: faker.internet.email(),
  //       password: faker.internet.password(),
  //       isBlock: faker.datatype.boolean(),
  //     });
  //   }
  // }

  async getAll(limit, offset) {
    // const client = await getConnection();
    // const result = await client.query('SELECT * FROM task');
    if(!limit || !offset) {
      const query = 'SELECT * FROM users';
      const result = await this.pool.query(query);
      return result.rows;
    }
    const query = `SELECT * FROM users LIMIT ${limit} OFFSET ${offset}`;
    const result = await this.pool.query(query);
    return result.rows;
  }

  async add(user) {
    if(!user || Object.keys(user).length === 0) {
      throw boom.badRequest('invalid data');
    }
    let newUser = {
      id: faker.string.uuid(),
      ...user,
    }
    this.users.push(newUser);
    return newUser;
  }

  async find(id) {
    const user = this.users.find(item => item.id === id);
    if(!user) {
      throw boom.notFound('user not found');
    }
    if(user.isBlock) {
      throw boom.conflict('user is blocked');
    }
    return user;
  }

  async update(id, changes) {
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('user not found'); // manejar errores con boom, devuelve error 404
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes,
    };
    return this.users[index];
  }

  async delete(id) {
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('user not found'); // manejar errores con boom, devuelve error 404
    }
    this.users.splice(index, 1);
    return {id};
  }
}

module.exports = UsersService;