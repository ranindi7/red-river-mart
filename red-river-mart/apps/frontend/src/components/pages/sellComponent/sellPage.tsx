import type { Item, FormItem } from "../../../../../../shared/types/types";
import { useNavigate } from "react-router-dom";
import filterOptionsData from "../../../jsonData/filterOptions.json";
import { useFormInputs } from "../../../hooks/useFormInputs";
import { useAuth } from "@clerk/clerk-react";
import { createItem } from "../../../apis/itemRepo";

export default function SellPage({ onAddItem }: FormItem) {
  const navigate = useNavigate();
  const { getToken, userId } = useAuth();

  const { fields, errors, validate, handleChange } = useFormInputs({
    name: "",
    category: "",
    price: "",
    description: "",
    file: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // validate form
    const isValid = validate();
    if (!isValid) return;

    // user must be logged in
    if (!userId) {
      alert("You must be logged in to sell an item.");
      return;
    }

    // get session token
    const token = await getToken();
    if (!token) {
      alert("Could not authenticate request.");
      return;
    }

    // create new item
    const newItem: Omit<Item, "id" | "seller"> = {
      name: fields.name as string,
      category: (fields.category as string).toLowerCase(),
      price: parseFloat(fields.price as string),
      description: fields.description as string,
      src: URL.createObjectURL(fields.file as File),
      sellerId: userId!,
    };

    // API to create item for backend
    const created = await createItem(newItem, token);

    // pass created item to parent component
    onAddItem(created);

    // navigate to home page
    navigate("/account");
  };

  const ErrorMessage = ({ fieldName }: { fieldName: string }) =>
    errors[fieldName] ? (
      <span style={{ color: "red", display: "block" }}>
        {errors[fieldName]}
      </span>
    ) : null;

  return (
    <div>
      <form onSubmit={handleSubmit} className="sellPage">
        <h2>Sell an Item</h2>

        <label htmlFor="itemName">Item Name:</label>
        <input
          type="text"
          id="name"
          name="itemName"
          value={fields.name as string}
          onChange={handleChange}
          required
        />
        <ErrorMessage fieldName="name" />

        <label htmlFor="itemCategory">Category:</label>
        <select
          id="category"
          name="itemCategory"
          value={fields.category as string}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a category
          </option>
          {filterOptionsData
            .filter((cat) => cat.id >= 3)
            .map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
        </select>
        <ErrorMessage fieldName="category" />

        <label htmlFor="itemPrice">Price:</label>
        <input
          type="number"
          id="price"
          name="itemPrice"
          value={fields.price as string}
          onChange={handleChange}
          required
        />
        <ErrorMessage fieldName="price" />

        <label htmlFor="itemDescription">Description:</label>
        <textarea
          id="description"
          name="itemDescription"
          value={fields.description as string}
          onChange={handleChange}
          rows={4}
          maxLength={200}
          required
        />
        <ErrorMessage fieldName="description" />

        <label htmlFor="itemImage">Image Upload:</label>
        <input
          type="file"
          id="file"
          name="itemImage"
          onChange={handleChange}
          required
          accept="image/*"
        />
        {fields.file && (
          <span style={{ color: "black" }}>
            Uploaded file: {(fields.file as File).name}
          </span>
        )}
        <ErrorMessage fieldName="file" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
