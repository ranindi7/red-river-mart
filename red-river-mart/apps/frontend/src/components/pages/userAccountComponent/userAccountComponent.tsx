import ProfilePicturePlaceholder from "../../../assets/ProfilePicPlaceholder.png";
import "./userAccountComponent.css";
import { useState, useEffect } from "react";
import type { User } from "../../../../../../shared/types/types";
import itemDetails from "../../../jsonData/itemDetails.json";
import { getUserById, updateUser } from "../../../apis/userRepo";
import EditUserModal from "../editUserDetailsComponent/editUserDetailsComponent";
import { useUser, useAuth } from "@clerk/clerk-react";

export default function UserAccount() {
  const { user, isSignedIn } = useUser();
  const { getToken } = useAuth();

  const [dbUser, setDbUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isSignedIn) return;

    const load = async () => {
      const token = await getToken();
      const backendUser = await getUserById(user.id, token);
      setDbUser(backendUser);
    };

    load();
  }, [isSignedIn, user, getToken]);

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


  // Loading states
  if (!isSignedIn) return <p>Please sign in to view your account.</p>;
  if (!dbUser) return <p>Loading user profile...</p>;

  return (
    <main>
      <div className="editProfile">
        <button onClick={() => setShowModal(true)}>Edit Profile</button>
      </div>

      <section className="userInfo">
        <img
          src={dbUser.profileImage || ProfilePicturePlaceholder}
          alt="Profile Picture"
          className="profilePicture"
        />
        <div className="userText">
          <h1>{dbUser.firstName} {dbUser.lastName}</h1>
          <h3>{dbUser.userName}</h3>
          <p>{dbUser.bio}</p>

          <div className="contactInfo">
            <h4>Contact Information</h4>
            <p>
              Email: {dbUser.email} | Phone: {dbUser.phone} | Preferred Contact:{" "}
              {dbUser.preferredContact}
            </p>
          </div>
        </div>
      </section>

      <section className="userContent">
        <div className="userProducts">
          <h3>Listed Products</h3>
          <ul>
            {itemDetails.slice(0, 3).map((item) => (
              <li key={item.id} className="productsDisplay">
                <img src={item.src} alt={item.name} height="100" />
                <div>
                  <h4>{item.name}</h4>
                  <p>Category: {item.category}</p>
                  <p>Price: ${item.price}</p>
                  <p>Status: {item.status}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {showModal && (
        <div className="ModalBackground" onClick={() => setShowModal(false)}>
          <div className="ModalForm" onClick={(e) => e.stopPropagation()}>
            <button className="ModalClose" onClick={() => setShowModal(false)}>
              X
            </button>
            <EditUserModal user={dbUser} onSave={handleSave} />
          </div>
        </div>
      )}
    </main>
  );
}
