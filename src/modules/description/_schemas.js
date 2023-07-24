const Joi = require("joi");

exports.postDescSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    userId: Joi.number().required(),
  }),
};

exports.patchDescSchema = {
  body: Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    userId: Joi.number(),
  }),
};
