import Joi, { ObjectSchema } from "joi";

export const getItemByIdSchema: ObjectSchema = Joi.object({
  id: Joi.string().required().messages({
    "any.required": "Item Id is required",
    "string.empty": "Item Id cannot be empty"
  })
});

export const postItemSchema: ObjectSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Item name is required",
    "string.empty": "Item name cannot be empty"
  }),
  category: Joi.string().required().messages({
    "any.required": "Category is required",
    "string.empty": "Category cannot be empty"
  }),
  price: Joi.number().required().messages({
    "any.required": "Price is required",
    "number.base": "Price must be a number"
  }),
  description: Joi.string().required().messages({
    "any.required": "Description is required",
    "string.empty": "Description cannot be empty"
  }),
  src: Joi.string().optional().messages({
    "any.required": "Image source is required",
    "string.empty": "Image source cannot be empty"
  }),
  sellerId: Joi.string().required().messages({
    "any.required": "Seller Id is required",
    "string.empty": "Seller Id cannot be empty"
  })
});

export const updateItemSchema: ObjectSchema = Joi.object({
  id: Joi.string().optional().messages({
    "any.required": "Item Id is required",
    "string.empty": "Item Id cannot be empty"
  }),
  name: Joi.string().optional().messages({
    "any.required": "Item name is required",
    "string.empty": "Item name cannot be empty"
  }),
  category: Joi.string().optional().messages({
    "any.required": "Category is required",
    "string.empty": "Category cannot be empty"
  }),
  price: Joi.number().optional().messages({
    "any.required": "Price is required",
    "number.base": "Price must be a number"
  }),
  description: Joi.string().optional().messages({
    "any.required": "Description is required",
    "string.empty": "Description cannot be empty"
  }),
  src: Joi.string().optional().messages({
    "any.required": "Image source is required",
    "string.empty": "Image source cannot be empty"
  }),
  sellerId: Joi.string().optional().messages({
    "any.required": "Seller Id is required",
    "string.empty": "Seller Id cannot be empty"
  })
});

export const deleteItemSchema: ObjectSchema = Joi.object({
  id: Joi.string().required().messages({
    "any.required": "Item Id is required",
    "string.empty": "Item Id cannot be empty"
  })
});