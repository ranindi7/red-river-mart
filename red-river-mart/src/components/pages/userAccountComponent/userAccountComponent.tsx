import ProfilePicturePlaceholder from "../../../assets/ProfilePicPlaceholder.png"
import "./userAccountComponent.css"
import { useState } from "react";
import type { Item } from "../../../types";
import itemDetails from "../../../jsonData/itemDetails.json"

export default function UserAccount() {
    const [userDetails, setUserDetails] = useState({
        userName: "Ranindi Gunasekera",
        bio: "Hello! I am a student in the AD&D program and I am interested in buying and selling computer parts",
        email: "ranindi@rrc.ca",
        phone: "657-576-3756",
        preferredContact: "Email/ In-app"
    }); 

    const [isEditing, setIsEditing] = useState(false);

    const [wishlist, setWishlist] = useState<Item[]>(itemDetails);

    const removeWishlistItem = (id: number) => {
        setWishlist((wishlistItems) => wishlistItems.filter((item) => item.id !== id));
    };


    return(
        <main>
            <div className="editProfile">
            </div>

            <section className="userInfo">
                <img src={ProfilePicturePlaceholder} alt="Profile Picture" className="profilePicture" />
                <div className="userText">
                        <h1>{userDetails.userName}</h1>

                        {isEditing ? (
                            <textarea
                                value={userDetails.bio}
                                onChange={(e) => 
                                    setUserDetails({...userDetails, bio: e.target.value})}
                            />
                        ) : (
                            <p>{userDetails.bio}</p>
                        )} 

                        
                        <div className="contactInfo">
                        <h4>Contact Information: </h4> 

                        {isEditing ? (
                            <>
                                <input
                                    value={userDetails.email}
                                    onChange={(e) => 
                                        setUserDetails({...userDetails, email: e.target.value})
                                    }
                                />  

                                <input
                                    value={userDetails.phone}
                                    onChange={(e) => 
                                        setUserDetails({...userDetails, phone: e.target.value})
                                    }
                                /> 

                                <input
                                    value={userDetails.preferredContact}
                                    onChange={(e) => 
                                        setUserDetails({...userDetails, preferredContact: e.target.value})
                                    }
                                /> 
                            </>
                        ) : (<p>Email: {userDetails.email} | Phone: {userDetails.phone} | Preferred Method of Contact: {userDetails.preferredContact}</p>)}
                        
                        <button type="submit" onClick={() => setIsEditing(!isEditing)}>
                            {isEditing ? "Save" : "Edit"} Profile
                        </button>

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
        </main>
    )
}