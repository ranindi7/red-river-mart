/**
This is a function called validateForm.
It validates the form fields based on defined business rules.
The parameters are FieldType which is the object containing all form field values.
This will return an object containing error messages, keyed by field name.
 */
import type { FieldsType, ErrorsType } from "../types";

export function validateForm(fields: FieldsType): ErrorsType {

    const errors: ErrorsType = {};

    // checks basic requirement fields if empty
    const requiredFields = ['name', 'category', 'price', 'description', 'bio', 'email', 'phone', 'preferredContact'];
    requiredFields.forEach(field => {
        const value = fields[field];
        if (typeof value === 'string' && !value.trim()) {
            errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
        }
    });

    // checks if the name has less than 4 characters
    const nameValue = fields.name;
    if (typeof nameValue === 'string' && nameValue.trim().length < 4) {
        errors.name = 'Name must exceed 3 characters.';
    }

    // checks if file is missing
    if (!fields.file) {
        errors.file = 'Image is required.';
    }

    // checks if the price is positive and greater than 0
    const priceValue = fields.price;
    if (typeof priceValue === 'string' && priceValue.trim()) {
        const price = parseFloat(priceValue);
        if (isNaN(price)) {
            errors.price = 'Price must be a valid number.';
        } else if (price <= 0) {
            errors.price = 'Price must be greater than zero.';
        }
    }

    // checks the length of description text
    const descriptionValue = fields.description;
    if (typeof descriptionValue === 'string' && descriptionValue.length > 200) {
        errors.description = 'Description cannot exceed 200 characters.';
    }

    return errors;
}