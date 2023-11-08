const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');

const { models } = require('../../libs/sequelize');

class categoriesService {

  constructor() {  }

  async getAll() {
    return await models.Category.findAll();
  }

  async getById(id) {
    const category = models.Category.findByPk(id, {
      include: {
        model: models.Product,
        as: 'products',
      },
    });
    if(!category || category.length === 0) {
      throw boom.notFound('category not found');
    }
    return category;
  }

  async add(category) {
    const newCategory = await models.Category.create(category);
    return newCategory;
  }

  async update(id, category) {
    try{
      const category = await this.getById(id);
      const rta = (await category).update(category);
      return rta;
    }catch(err){
      throw boom.notFound('could not update category');
    }
  }

  async remove(id) {
    try{
      const category = await this.getById(id);
      (await category).destroy();
      return id;
    }catch(err){
      throw boom.notFound('category not found');
    }
  }

}

module.exports = categoriesService;