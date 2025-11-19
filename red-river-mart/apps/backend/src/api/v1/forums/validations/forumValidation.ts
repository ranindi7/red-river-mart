import Joi, { ObjectSchema } from "joi";

export const getForumByIdSchema: ObjectSchema = Joi.object({
  id: Joi.number().required().messages({
    "any.required": "Forum Id is required",
    "number.base": "Forum Id must be a number"
  })
});

export const createForumSchema: ObjectSchema = Joi.object({
  subject: Joi.string().required().messages({
    "any.required": "Subject is required",
    "string.empty": "Subject cannot be empty"
  }),
  title: Joi.string().required().messages({
    "any.required": "Title is required",
    "string.empty": "Title cannot be empty"
  }),
  description: Joi.string().required().messages({
    "any.required": "Description is required",
    "string.empty": "Description cannot be empty",
  }),
  date: Joi.string().optional()
});

export const updateForumSchema: ObjectSchema = Joi.object({
  id: Joi.number().optional(),
  subject: Joi.string().required().messages({
    "any.required": "Subject is required",
    "string.empty": "Subject cannot be empty"
  }),
  title: Joi.string().required().messages({
    "any.required": "Title is required",
    "string.empty": "Title cannot be empty"
  }),
  description: Joi.string().required().messages({
    "any.required": "Description is required",
    "string.empty": "Description cannot be empty",
  }),
  date: Joi.string().optional()
});

export const deleteForumSchema: ObjectSchema = Joi.object({
  id: Joi.number().required().messages({
    "any.required": "Forum Id is required",
    "number.base": "Forum Id must be a number"
  })
});