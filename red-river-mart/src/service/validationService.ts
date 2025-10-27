/**
This is a service function called validateForm.
It validates the form fields based on defined business rules.
The parameters are FieldType which is the object containing all form field values.
This will return an object containing error messages, keyed by field name.
 */
import type { FieldsType, ErrorsType } from "../types";
export function validateForm(fields: FieldsType): ErrorsType {
    const errors: ErrorsType = {};

    // This loops through each field in the form field
    for (const field in fields) {
        const value = fields[field];
        
        // Checks and validates the price if it's positive and greater than 0
        if (field === "price" && typeof value === "string") {
            if (!value.trim()) {
                errors.price = "Price is required.";
            } else {
                const price = parseFloat(value);
                if (isNaN(price)) {
                    errors.price = "Price must be a valid number.";
                } else if (price <= 0) {
                    errors.price = "Price must be greater than zero and not negative.";
                }
            }
            continue; // This skips the next checks for this field and moves on to the next field
        }

        // Checks and validates the email format with simple email regex
        if (field === "email" && typeof value === "string") {
            if (!value.trim()) {
                errors.email = "Email is required.";
            } else if (!/^\S+@\S+\.\S+$/.test(value)) {
                errors.email = "Email is invalid.";
            }
            continue; 
        }

        // This checks and validates the phone nubmer with a simple regex that allows dashes and numbers
        if (field === "phone" && typeof value === "string") {
            if (!value.trim()) {
                errors.phone = "Phone Number is required.";
            } else if (!/^\d{10}$/.test(value)) {
                errors.phone = "Phone Number needs to be 10 digits.";
            }
            continue; 
        }
        // Checks the input field if it is empty
        if (typeof value === "string") {
            if (!value.trim()) {
                errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
                continue;
            }

            // Checks and validates that the inputs must be atleast more than 3 characters long
            if (value.trim().length < 3) {
                errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} must be at least 3 characters long.`;
            }

            // Checks and validates all input fields except for description and bio to not be able to exceed 20 characters
            if (value.trim().length > 20 && field !== "description" && field !== "bio") {
                errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} must be less than 20 characters long.`;
            }
            // Checks and validates description and bio input fields to not exceed 200 characters
            if ((field === "description" || field === "bio") && value.length > 200) {
                errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} cannot exceed over 200 characters.`;
            }
        }
    }

    return errors;
}