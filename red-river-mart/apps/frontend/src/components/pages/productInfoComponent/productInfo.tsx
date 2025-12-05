import "./productInfo.css";
import type { Item } from "../../../../../../shared/types/types";
import { getCurrentUser } from "../../../hooks/getCurrentUser";
import { deleteItem, updateItem } from "../../../apis/itemRepo";
import { useState } from "react";
import EditItemModal from "./editProductInfo";
// import EditItemModal from "./editProductInfo";
// import { useNavigate } from "react-router-dom";


export default function ProductInfo ({ item, mode }: { item: Item; mode: "buy" | "listing";}) {
  // const navigate = useNavigate();
  const { dbUser, isSignedIn, getToken } = getCurrentUser();
  const [showEditModal, setShowEditModal] = useState(false);
  // Loading states
  if (!isSignedIn) return <p>Please sign in to view the listing.</p>;
  if (!dbUser) return <p>Loading listing...</p>;
 
  const seller = item.seller || dbUser;
  const teamsLink = `https://teams.microsoft.com/l/chat/0/0?users=${seller.email}`;

  const handleDelete = async () => {
    try {
      const token = await getToken();
      await deleteItem(item.id, token);
      console.log(item.id, "deleted");
      // navigate("/account");
      window.location.reload();
    } catch (err) {
      console.error("Error deleting:", err);
    }
  };

  const handleSave = async (updatedData: Omit<Item, "id">) => {
      try {
        const token = await getToken();
        const edited: Item = { id: item.id, ...updatedData };
        await updateItem(edited, token);
        window.location.reload();
      } catch (err) {
        console.error("Failed to update user:", err);
      }
  };

  return (
    <section className="product">
      <div className="productImageBox">
        <img src={item.src} alt={item.name} />
      </div>

      <div className="productInfoContainer">
        <h2>Seller: {seller.firstName} {seller.lastName}</h2>
        <h1>{item.name}</h1>
        <h3>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</h3>
        <h3>${item.price.toFixed(2)}</h3>
        <div className="productInfoBox">
          <p>{item.description}</p>
        </div>


        {mode === "buy" && (
          <a href={teamsLink} target="_blank" rel="noopener noreferrer">
            <button className="messageButton">Message Seller</button>
          </a>
        )}

        {mode === "listing" && (
          <div className="productButtons">
            <button className="editButton" onClick={() => setShowEditModal(true)}>Edit</button>
            <button className="deleteButton" onClick={ handleDelete }>Delete</button>
          </div>
        )}

        {showEditModal && (
          <div className="ModalBackground" onClick={() => setShowEditModal(false)}>
            <div className="ModalForm" onClick={(e) => e.stopPropagation()}>
              <button className="ModalClose" onClick={() => setShowEditModal(false)}>X</button>

              <EditItemModal 
                item={item}
                onSave={handleSave}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};