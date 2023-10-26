const Joi = require("joi");

const addValidateContact = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const updateSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  addValidateContact,
  updateSchema,
};