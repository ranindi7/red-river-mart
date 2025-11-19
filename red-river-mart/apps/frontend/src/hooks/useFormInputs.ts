/*
This is a hook that handles form input functionality - it manages the state of multiple
input fields in one object. It allows us to update any field dynamically without needing 
separate useState calls for each input.  
*/
import { useState } from "react";
import type { ChangeEvent } from "react";
import type { FieldsType, ErrorsType } from "../../../../shared/types/types";
import { validateForm } from "../service/validationService";

export function useFormInputs(
    initialState: FieldsType
): {
    fields: FieldsType;
    errors: ErrorsType;
    handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    validate: () => boolean;
} {
    const [fields, setFields] = useState(initialState);
    const [errors, setErrors] = useState<ErrorsType>({})

    const validate = (): boolean => {
        const newErrors = validateForm(fields);
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { id, type, value, files } = event.target as HTMLInputElement;

        if (type === "file") {
            setFields((prev) => ({
                ...prev,
                [id]: files && files[0] ? files[0] : null
            }));
        } else {
            setFields((prev) => ({
                ...prev,
                [id]: value
            }));
        }
    }  
    
    return { fields, handleChange, errors, validate }  
}
