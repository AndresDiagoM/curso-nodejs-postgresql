const Joi = require('joi');

const id = Joi.alternatives().try(Joi.string().uuid(), Joi.number());
const name = Joi.string().min(3).max(30).alphanum();
const lastName = Joi.string().min(3).max(30).alphanum();
const email = Joi.string().email();
const password = Joi.string().min(8).max(30).alphanum();
const role = Joi.string().valid('admin', 'user');
const isBlock = Joi.boolean();

const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
  password: password.required(),
  role: role.required(),
  isBlock: isBlock.required(),
});

const updateUserSchema = Joi.object({
  name,
  lastName,
  email,
  password,
  role,
  isBlock,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
};