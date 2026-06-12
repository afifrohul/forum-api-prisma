import Joi from "joi";

export const registerPayloadSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8),
});

export const loginPayloadSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8),
});
