import { useState } from "react";

export default function SellPage (){

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.value);
  }
    
  const handleSubmit = (e: React.FormEvent) => {
    
    e.preventDefault();
  
    console.log("Added an item to sell");

    // reset the form fields
    setName("");
    setCategory("");
    setPrice("");
    setFile("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="sellPage">
        <h2>Sell an Item</h2>
          <label htmlFor="itemName">Item Name:</label>
          <input type="text" id="itemName" name="itemName" value={name} onChange={handleNameChange} required />
          <label htmlFor="itemCategory">Category:</label>
          <input type="text" id="itemCategory" name="itemCategory" value={category} onChange={handleCategoryChange} required />
          <label htmlFor="itemPrice">Price:</label>
          <input type="number" id="itemPrice" name="itemPrice" value={price} onChange={handlePriceChange} required />
          <label htmlFor="itemImage">Image Upload:</label>
          <input type="file" id="itemImage" name="itemImage" value={file} onChange={handleFileChange} required />
          <button type="submit">Submit</button>
      </form>
    </div>
  );
}