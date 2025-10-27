import type { Item, FormItem } from "../../../types";
import { useNavigate } from "react-router-dom";
import filterOptionsData from "../../../jsonData/filterOptions.json";
import { useFormInputs } from "../../../hooks/useFormInputs";

export default function SellPage ({onAddItem}: FormItem) {

  // used to navigate to layout after submitting the form
  const navigate = useNavigate();

  const { fields, errors, validate, handleChange } = useFormInputs({
    name: "",
    category: "",
    price: "",
    description: "",
    file: null
  })

  // form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    
    e.preventDefault();

    // run all validations
    const isValid = validate();

    // stop submission if validation fails
    if (!isValid) {
      return;
    }

    // create a new item object
    const newItem: Omit<Item, 'id'> = {
      name: fields.name as string,
      category: fields.category as string,
      price: parseFloat(fields.price as string),
      description: fields.description as string,
      src: URL.createObjectURL(fields.file as File),
    };

    // add a new item
    onAddItem(newItem);

    // navigate back to the marketplace page
    navigate("/");
  }

  const ErrorMessage = ({ fieldName }: { fieldName: string }) => (
    errors[fieldName] 
      ? <span style={{color: "red", display: "block"}}>{errors[fieldName]}</span> 
      : null
  );

  return (
    <div>
      <form onSubmit={handleSubmit} className="sellPage">
        <h2>Sell an Item</h2>
        <label htmlFor="itemName">Item Name:</label>
        <input type="text" id="name" name="itemName" value={fields.name as string} onChange={handleChange} required />
        <ErrorMessage fieldName="name" />

        <label htmlFor="itemCategory">Category:</label>
        <select id="category" name="itemCategory" value={fields.category as string} onChange={handleChange} required>
          <option value="" disabled>Select a category</option>
          {filterOptionsData
            .filter(cat => cat.id >= 3)
            .map(cat => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
        </select>
        <ErrorMessage fieldName="category" />

        <label htmlFor="itemPrice">Price:</label>
        <input type="number" id="price" name="itemPrice" value={fields.price as string} onChange={handleChange} required />
        <ErrorMessage fieldName="price" />

        <label htmlFor="itemDescription">Description:</label>
        <textarea id="description" name="itemDescription" value={fields.description as string} onChange={handleChange} rows={4} maxLength={200} required />
        <ErrorMessage fieldName="description" />

        <label htmlFor="itemImage">Image Upload:</label>
        <input type="file" id="file" name="itemImage" onChange={handleChange} required accept="image/*"/>
        {fields.file && <span style={{color: "black"}}>Uploaded file: {(fields.file as File).name}</span>}
        <ErrorMessage fieldName="file" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}