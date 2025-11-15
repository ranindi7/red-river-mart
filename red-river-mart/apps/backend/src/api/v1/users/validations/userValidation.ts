import Joi, { ObjectSchema } from "joi";

export const getUserByIdSchema: ObjectSchema = Joi.object({
    id: Joi.string().required().messages({
        "any.required": "User ID is required.",
        "string.empty": "User ID cannot be empty."
    })
});

export const createUserSchema: ObjectSchema = Joi.object({
    userName: Joi.string().required().messages({
        "any.required": "Name is required.",
        "string.empty": "Name cannot be empty."
    }),

    bio: Joi.string().max(200).messages({
        "string.max": "Bio cannot exceed 200 characters."
    }),

    //https://stackoverflow.com/questions/57972358/joi-email-validation
    email: Joi.string().email({ tlds: {allow:false} }).messages({
        "string.email": "Please enter a valid email address."
    }),

    phone: Joi.string()
    .pattern(/^\d{3}-\d{3}-\d{4}$/)
    .messages({
        "string.pattern": "Phone number must be in the format XXX-XXX-XXXX"
    }),  

    preferredContact: Joi.string().optional()
})

export const updateUserSchema: ObjectSchema = Joi.object({
    id: Joi.number().positive().required(),
    bio: Joi.string().max(200).messages({
        "string.max": "Bio cannot exceed 200 characters."
    }),

    email: Joi.string().email({ tlds: {allow:false} }).messages({
        "string.email": "Please enter a valid email address."
    }),

    phone: Joi.string()
    .pattern(/^\d{3}-\d{3}-\d{4}$/)
    .messages({
        "string.pattern": "Phone number must be in the format XXX-XXX-XXXX"
    })
});

export const deleteUserSchema: ObjectSchema = Joi.object({
    id: Joi.string().required().messages({
        "any.required": "User ID is required.",
        "string.empty": "User ID cannot be empty."
    })
})