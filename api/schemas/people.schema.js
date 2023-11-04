const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(30).alphanum();
const lastName = Joi.string().min(3).max(30).alphanum();
const email = Joi.string().email();

const createPeopleSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
});

const updatePeopleSchema = Joi.object({
  name,
  lastName,
  email,
});

const getPeopleSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createPeopleSchema,
  updatePeopleSchema,
  getPeopleSchema,
};