const Joi = require('joi');

const id = Joi.alternatives().try(Joi.string().uuid(), Joi.number());
const name = Joi.string().min(3).max(30).alphanum();
const lastName = Joi.string().min(3).max(30).alphanum();
const address = Joi.string().min(3).max(30).alphanum();
const email = Joi.string().email();
const birthDate = Joi.date();
const userId = Joi.number();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
  address: address.required(),
  birthDate: birthDate.required(),
  userId: userId.required(),
});

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  email,
  address,
  birthDate,
  userId,
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerSchema,
};