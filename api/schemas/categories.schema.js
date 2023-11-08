const Joi = require('joi');

const id = Joi.alternatives().try(Joi.string().uuid(), Joi.number());
const name = Joi.string().min(3).max(30).alphanum();

const createCategorySchema = Joi.object({
  name: name.required(),
});

const updateCategorySchema = Joi.object({
  name,
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
};
