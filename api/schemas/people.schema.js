const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(30).alphanum();
const lastName = Joi.string().min(3).max(30).alphanum();
const address = Joi.string().min(3).max(30);
const email = Joi.string().email();
const phoneNumber = Joi.string().min(3).max(30);

const createPeopleSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  address: address.required(),
  phoneNumber: phoneNumber.required(),
  email: email.required(),
});

const updatePeopleSchema = Joi.object({
  name,
  lastName,
  address,
  phoneNumber,
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