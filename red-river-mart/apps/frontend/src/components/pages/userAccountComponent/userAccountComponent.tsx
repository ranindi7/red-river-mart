import ProfilePicturePlaceholder from "../../../assets/ProfilePicPlaceholder.png";
import "./userAccountComponent.css";
import { useState } from "react";
import type { Item, User } from "../../../../../../shared/types/types";
import { updateUser } from "../../../apis/userRepo";
import EditUserModal from "../editUserDetailsComponent/editUserDetailsComponent";
import { getCurrentUser } from "../../../hooks/getCurrentUser";
import ProductInfo from "../productInfoComponent/productInfo";

export default function UserAccount() {
  const { dbUser, setDbUser, isSignedIn, getToken } = getCurrentUser();
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleSave = async (updatedData: Omit<User, "id">) => {
    try {
      const token = await getToken();
      const editedUser: User = { id: dbUser!.id, ...updatedData };
      const updated = await updateUser(editedUser, token);
      setDbUser(updated);
      setShowModal(false);
    } catch (err) {
      console.error("Failed to update user:", err);
    }
  };

  if (!isSignedIn) return <p>Please sign in to view your account.</p>;
  if (!dbUser) return <p>Loading user profile...</p>;

  return (
    <section className="profileContainer">
      <div className="editProfile">
        <button onClick={() => setShowModal(true)}>Edit Profile</button>
      </div>

      <section className="userInfo">
        <img
          src={dbUser.profileImage || ProfilePicturePlaceholder}
          alt="Profile Picture"
          className="profilePicture"
        />

        <h1>{dbUser.firstName} {dbUser.lastName}</h1>
        <h3>{dbUser.userName}</h3>
        <p className="bio">{dbUser.bio}</p>

        <div className="contactInfo">
          <h4>Contact Information</h4>
          <p>Email: {dbUser.email} | Phone: {dbUser.phone} | Preferred: {dbUser.preferredContact}</p>
        </div>
      </section>

      <hr className="divider" />

      <section className="userContent">
        <h3 className="sectionTitle">Listed Products</h3>

        {dbUser.items && dbUser.items.length > 0 ? (
          <div className="productGrid">
            {dbUser.items.map((item) => (
              <div key={item.id} className="productDisplay" onClick={() => setSelectedItem(item)}>
                <img src={item.src} alt={item.name} />
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No Products Listed Yet.</p>
        )}
      </section>

      {showModal && (
        <div className="ModalBackground" onClick={() => setShowModal(false)}>
          <div className="ModalForm" onClick={(e) => e.stopPropagation()}>
            <button className="ModalClose" onClick={() => setShowModal(false)}>X</button>
            <EditUserModal user={dbUser} onSave={handleSave} />
          </div>
        </div>
      )}

      {selectedItem && (
        <div className="ModalBackground" onClick={() => setSelectedItem(null)}>
          <div className="ModalProduct" onClick={e => e.stopPropagation()}>
            <button className="ModalClose" onClick={() => setSelectedItem(null)}>X</button>
            <ProductInfo item={selectedItem} mode="listing" />
          </div>
        </div>
      )}
    </section>
  );
}