import Joi from "joi";

export const createThreadPayloadSchema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
  category: Joi.string(),
});
