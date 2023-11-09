// schema or DTO is the same
const Joi = require('joi');


const id = Joi.alternatives().try(Joi.string().uuid(), Joi.number());
// allow spaces in name
const name = Joi.string().min(3).max(30).regex(/^[a-zA-Z ]+$/);
// const name = Joi.string().min(3).max(30).alphanum();
const price = Joi.number().min(1).max(1000000);
const description = Joi.string().min(3).max(50).regex(/^[a-zA-Z ]+$/);
const image = Joi.string().uri();
// const isBlock = Joi.boolean();
const categoryId = Joi.number().min(1).max(100);

const limit = Joi.number().min(1).max(100);
const offset = Joi.number().min(0).max(100);

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  description: description.required(),
  // isBlock: isBlock.required(),
  categoryId: categoryId.required(),
});

const updateProductSchema = Joi.object({
  name,
  price,
  image,
  description,
  // isBlock,
  categoryId,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

const queryProductSchema = Joi.object({
  limit,
  offset,
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  queryProductSchema,
};