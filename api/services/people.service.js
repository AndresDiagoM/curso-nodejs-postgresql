const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');

class peoplesService {
  constructor($http) {
    this.peoples = [];
    this.generate();
  }

  generate(){
    let size = 5;
    for(let i=0; i<size; i++){
      this.peoples.push({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
      });
    }
    // console.log(this.peoples);
  }

  async getAll() {
    return this.peoples;
  }

  async getById(id) {
    const people = this.peoples.find(item => item.id === id);
    if(!people) {
      throw boom.notFound('people not found');
    }
    if(!id) {
      throw boom.badRequest('id must be sent');
    }
    return people;
  }

  async add(people) {
    if(!people || Object.keys(people).length === 0) {
      throw boom.badRequest('invalid data');
    }
    let newPeople = {
      id: faker.string.uuid(),
      ...people,
    }
    this.peoples.push(newPeople);
    return newPeople;
  }

  async remove(id) {
    const index = this.peoples.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('people not found');
    }
    const people = this.peoples[index];
    this.peoples.splice(index, 1);
    return people;
  }

  async update(id, people) {
    const index = this.peoples.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('people not found');
    }
    const person = this.peoples[index];
    this.peoples[index] = {
      ...person,
      ...people,
    };
    return this.peoples[index];
  }

}

module.exports = peoplesService;