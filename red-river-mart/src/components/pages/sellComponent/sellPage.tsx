import { useState } from "react";
import type { Item, FormItem } from "../../../types";
import { useNavigate } from "react-router-dom";
import filterOptionsData from "../../../jsonData/filterOptions.json";

export default function SellPage ({onAddItem}: FormItem) {

  // used to navigate to layout after submitting the form
  const navigate = useNavigate();

  // set input states
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File|null>(null);

  //set error states
  const [nameError, setNameError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [fileError, setFileError] = useState("");
  

  // real time validation handlers
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    if (name.trim()) {
      setName(name);
      setNameError("");
    } else {
      setName("");
      setNameError("Item Name is required.");
    }
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    if (category) {
      setCategory(category);
      setCategoryError("");
    } else {
      setCategory("");
      setCategoryError("Category is required.");
    }
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const price = e.target.value;
    if (price) {
      setPrice(price);
      setPriceError("");
    } else {
      setPrice("");
      setPriceError("Price is required.");
    }
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const description = e.target.value;
    if (description) {
      setDescription(description);
      setDescriptionError("");
    } else {
      setDescription("");
      setDescriptionError("Description is required.");
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
      setFileError(""); 
    } else {
      setFile(null);
      setFileError("Image is required.");
    }
  }
  
  // form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    
    e.preventDefault();

    if (!file) {
      setFileError("Image is required.");
      return;
    }
    console.log("Added an item to sell");

    // create a new item object
    const newItem: Item = {
      id: Date.now(),
      name,
      category,
      price: parseFloat(price),
      description: description,
      src: URL.createObjectURL(file),
    };

    // add a new item
    onAddItem(newItem);

    // reset the form fields
    setName("");
    setCategory("");
    setPrice("");
    setFile(null);

    // navigate back to the marketplace page
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="sellPage">
        <h2>Sell an Item</h2>
        <label htmlFor="itemName">Item Name:</label>
        <input type="text" id="itemName" name="itemName" value={name} onChange={handleNameChange} required />
        <span style={{color: "black"}}>{nameError}</span>

        <label htmlFor="itemCategory">Category:</label>
        <select id="itemCategory" name="itemCategory" value={category} onChange={handleCategoryChange} required>
          <option value="" disabled>Select a category</option>
          {filterOptionsData
            .filter(cat => cat.id >= 3)
            .map(cat => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
        </select>
        <span style={{color: "black"}}>{categoryError}</span>

        <label htmlFor="itemPrice">Price:</label>
        <input type="number" id="itemPrice" name="itemPrice" value={price} onChange={handlePriceChange} required />
        <span style={{color: "black"}}>{priceError}</span>

        <label htmlFor="itemDescription">Description:</label>
        <textarea id="itemDescription" name="itemDescription" value={description} onChange={handleDescriptionChange} rows={4} maxLength={200} required />
        <span style={{color: "black"}}>{descriptionError}</span>

        <label htmlFor="itemImage">Image Upload:</label>
        <input type="file" id="itemImage" name="itemImage" onChange={handleFileChange} required accept="image/*"/>
        {file && <span style={{color: "black"}}>Uploaded file: {file.name}</span>}
        <span style={{color: "black"}}>{fileError}</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}