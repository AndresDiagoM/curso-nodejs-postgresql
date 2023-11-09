const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');

const {models} = require('../../libs/sequelize');

class peoplesService {
  constructor() {}

  async getAll() {
    const people = await models.People.findAll();
    return people;
  }

  async getById(id) {
    const person = await models.People.findByPk(id);
    if(!person) {
      throw boom.notFound('person not found');
    }
    return person;
  }

  async add(person) {
    const newPeople = await models.People.create(person);
    return newPeople;
  }

  async remove(id) {
    const person = await this.getById(id);
    (await person).destroy();
    return id;
  }

  async update(id, people) {
    const person = await this.getById(id);
    const updated = (await person).update(people);
    return updated;
  }

}

module.exports = peoplesService;