// schema or DTO is the same
const Joi = require('joi');


const id = Joi.alternatives().try(Joi.string().uuid(), Joi.number());
const name = Joi.string().min(3).max(30).alphanum();
const price = Joi.number().min(1).max(1000000);
const image = Joi.string().uri();
const isBlock = Joi.boolean();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  isBlock: isBlock.required(),
});

const updateProductSchema = Joi.object({
  name,
  price,
  image,
  isBlock,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
};