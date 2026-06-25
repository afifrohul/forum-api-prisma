import Joi from "joi";

export const createCommentPayloadSchema = Joi.object({
  content: Joi.string().required(),
});
