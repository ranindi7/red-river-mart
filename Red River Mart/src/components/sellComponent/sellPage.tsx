export default function SellPage (){
  return (
    <form className="sellPage">
      <h2>Sell an Item</h2>
      <label htmlFor="itemName">Item Name:</label>
      <input type="text" id="itemName" name="itemName" required />
        <label htmlFor="itemCategory">Category:</label>
        <input type="text" id="itemCategory" name="itemCategory" required />
        <label htmlFor="itemPrice">Price:</label>
        <input type="number" id="itemPrice" name="itemPrice" required />
        <label htmlFor="itemImage">Image Upload:</label>
        <input type="file" id="itemImage" name="itemImage" required />
        <button type="submit">Submit</button>
    </form>
  );
}