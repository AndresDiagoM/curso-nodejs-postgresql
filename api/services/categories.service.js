const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');

class categoriesService {

  constructor() {
    this.categories = [];
    this.generate();
  }

  generate(){
    let size = 5;
    for(let i=0; i<size; i++){
      this.categories.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
      });
    }
    // console.log(this.categories);
  }

  async getAll() {
    return this.categories;
  }

  async getById(id) {
    const category = this.categories.find(item => item.id === id);
    if(!category) {
      throw boom.notFound('category not found');
    }
    if(!id) {
      throw boom.badRequest('id must be sent');
    }
    return category;
  }

  async add(category) {
    if(!category || Object.keys(category).length === 0) {
      throw boom.badRequest('invalid data');
    }
    let newCategory = {
      id: faker.string.uuid(),
      ...category,
    }
    this.categories.push(newCategory);
    return newCategory;
  }

  async remove(id) {
    const index = this.categories.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('category not found');
    }
    const category = this.categories[index];
    this.categories.splice(index, 1);
    return category;
  }

  async update(id, category) {
    const index = this.categories.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('category not found');
    }
    const currentCategory = this.categories[index];
    this.categories[index] = {
      ...currentCategory,
      ...category,
    };
    return this.categories[index];
  }

}

module.exports = categoriesService;