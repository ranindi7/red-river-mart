import Joi, { ObjectSchema } from "joi";

export const createCommentSchema: ObjectSchema = Joi.object({
  text: Joi.string().required().messages({
    "any.required": "Comment text is required",
    "string.empty": "Comment text cannot be empty",
  }),
  forumId: Joi.number().required().messages({
    "any.required": "Forum ID is required",
    "number.base": "Forum ID must be a number",
  }),
});

export const updateCommentSchema: ObjectSchema = Joi.object({
  commentId: Joi.number().required().messages({
    "any.required": "Comment ID is required",
    "number.base": "Comment ID must be a number",
  }),
  text: Joi.string().required().messages({
    "any.required": "Updated comment text is required",
    "string.empty": "Comment text cannot be empty",
  }),
});

export const deleteCommentSchema: ObjectSchema = Joi.object({
  commentId: Joi.number().required().messages({
    "any.required": "Comment ID is required",
    "number.base": "Comment ID must be a number",
  }),
});

export const getCommentsByForumIdSchema: ObjectSchema = Joi.object({
  forumId: Joi.number().required().messages({
    "any.required": "forum ID is required",
    "number.base": "forum ID must be a number",
  }),
});
