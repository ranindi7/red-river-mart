import ProfilePicturePlaceholder from "../../../assets/ProfilePicPlaceholder.png"
import "./userAccountComponent.css"
import { useState, useEffect } from "react";
import type { Item, User } from "../../../../../../shared/types/types";
import itemDetails from "../../../jsonData/itemDetails.json"
import { getUserById, updateUser } from "../../../service/userService";
import EditUserModal from "../editUserDetailsComponent/editUserDetailsComponent";

export default function UserAccount() {
    const [user, setUser] = useState<User | null>(null);
    const [wishlist, setWishlist] = useState<Item[]>(itemDetails);
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const fetchedUser = await getUserById(3);
                setUser(fetchedUser);
            } catch (error){
                console.error(error);
            }
        };
        fetchUser();
    }, []);

    const removeWishlistItem = (id: number) => {
        setWishlist((wishlistItems) => wishlistItems.filter((item) => item.id !== id));
    };

    const handleSave = async (updatedUser: Omit<User, 'id'>) => {
        if (!user) 
            return;
        
        const newUser: User = {
            ...user,
            ...updatedUser
        }
      
        try {
            await updateUser(newUser); 
            setUser(newUser); 
            setShowModal(false); 
        } catch (error) {
            console.error("Failed to update user:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    // This hsows a loading state if user is null
    if (!user) return <p>Loading user...</p>;

    return(
        <main>
            <div className="editProfile">
                <button onClick={() => setShowModal(true)}>
                   Edit Profile
                </button>
            </div>

            <section className="userInfo">
                <img src={ProfilePicturePlaceholder} alt="Profile Picture" className="profilePicture" />
                <div className="userText">
                    <h1>{user.userName}</h1>
                    <p>{user.bio}</p>

                    <div className="contactInfo">
                        <h4>Contact Information</h4>
                        <p>Email: {user.email} | Phone: {user.phone} | Preferred Contact: {user.preferredContact}</p>
                    </div>
                </div>
            </section>

            <section className="userContent">
                <div className="userProducts">
                    <h3>Listed Products</h3>
                    <ul>
                        {itemDetails.slice(0,3).map(item => (
                            <li key={item.id} className="productsDisplay"> 
                                <img src={item.src} alt={item.name} height="100"/>
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

                <div className="userWishlist">
                    <h3>Wishlist</h3>
                    <ul className="wishlistProducts">
                        {wishlist.slice(0,6).map(item => (
                            <li key={item.id} className="wishlistDisplay"> 
                                <img src={item.src} alt={item.name} height="65"/>
                                <div>
                                    <h4>{item.name}</h4>
                                    <button onClick={() => removeWishlistItem(item.id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {showModal && (
            <div className="ModalBackground" onClick={() => setShowModal(false)}>
                <div className="ModalForm" onClick={e => e.stopPropagation()}>
                <button className="ModalClose" onClick={() => setShowModal(false)}>X</button>
                <EditUserModal user={user} onSave={handleSave} />
                </div>
            </div>
            )}
        </main>
    )
}