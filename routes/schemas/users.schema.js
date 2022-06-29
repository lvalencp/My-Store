const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const last_name = Joi.string().min(3).max(15);
const email = Joi.string().min(15).max(50);

const createUserSchema = Joi.object({
  name: name.required(),
  last_name: last_name.required(),
  email: email.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  last_name: last_name,
  email: email,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
