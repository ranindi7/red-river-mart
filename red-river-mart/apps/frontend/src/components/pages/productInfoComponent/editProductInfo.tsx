import { useFormInputs } from "../../../hooks/useFormInputs";
import type { Item } from "../../../../../../shared/types/types";
import "./editItemModal.css";

export default function EditItemModal({
  item,
  onSave
}: {
  item: Item;
  onSave: (updatedItem: Omit<Item, 'id'>) => void;
}) {
  const { fields, errors, handleChange, validate } = useFormInputs({
    name: item.name,
    price: item.price.toString(),
    description: item.description,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const updatedItem: Omit<Item, 'id'> = {
      name: fields.name as string,
      price: Number(fields.price),
      description: fields.description as string,
      category: item.category,
      src: item.src,
      sellerId: item.sellerId,
      seller: item.seller
    };

    onSave(updatedItem);
  };

  return (
    <div>
      <form className="editItemModal" onSubmit={handleSubmit}>
        <h2>Edit Listing</h2>

        <div>
          <label>Name</label>
          <input id="name" value={fields.name as string} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label>Price</label>
          <input
            type="number"
            id="price"
            value={fields.price as string}
            onChange={handleChange}
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>

        <div>
          <label>Description</label>
          <textarea
            id="description"
            value={fields.description as string}
            onChange={handleChange}
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
    
  );
}
