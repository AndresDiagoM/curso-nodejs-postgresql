const Joi = require('joi');

const id = Joi.alternatives().try(Joi.string().uuid(), Joi.number());
const customerId = Joi.number();

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
});

const updateOrderSchema = Joi.object({
  customerId,
});

const getOrderSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createOrderSchema,
  updateOrderSchema,
  getOrderSchema,
};