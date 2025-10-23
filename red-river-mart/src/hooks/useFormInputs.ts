/*
This is a hook that hadnles form input functionality - it manages the state of multiple
input fields in one object. It allows us to update any field dynamically without needing 
separate useState calls for each input.  
*/
import { useState } from "react";
import type { ChangeEvent } from "react";

interface FieldsType {
    [inputField: string]: string | File | null 
}

export function useFormInputs(
    initialState: FieldsType
): {
    fields: FieldsType;
    handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
} {
    const [fields, setFields] = useState(initialState);

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
    
    return { fields, handleChange }
    
}
