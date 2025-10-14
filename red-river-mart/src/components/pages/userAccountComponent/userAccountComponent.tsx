import ProfilePicturePlaceholder from "../../../assets/ProfilePicPlaceholder.png"
import "./userAccountComponent.css"
import { useState } from "react";
import type { Item } from "../../../types";
import type { User } from "../../../types"
import itemDetails from "../../../jsonData/itemDetails.json"
import userInfo from "../../../jsonData/userInfo.json"

export default function UserAccount() {
    const [userDetails, setUserDetails] = useState<User>(userInfo[0]); 

    const [isEditing, setIsEditing] = useState(false);

    const [wishlist, setWishlist] = useState<Item[]>(itemDetails);

    const removeWishlistItem = (id: number) => {
        setWishlist((wishlistItems) => wishlistItems.filter((item) => item.id !== id));
    };


    return(
        <main>
            <div className="editProfile">
                <button type="submit" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? "Save" : "Edit"} Profile
                </button>
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
                        ) : (<p> <b>Email:</b> {userDetails.email} <b>| Phone: </b>{userDetails.phone} <b>| Preferred Method of Contact: </b>{userDetails.preferredContact}</p>)}                      
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