import ProfilePicturePlaceholder from "../../../assets/ProfilePicPlaceholder.png"
import "./userAccountComponent.css"
import { useState } from "react";
import type { Item, User } from "../../../types";
import itemDetails from "../../../jsonData/itemDetails.json"
import { useFormInputs } from "../../../hooks/useFormInputs";
import { getUserById, updateUser } from "../../../apis/userRepo";

export default function UserAccount() {
    // uses getUserById method to get user with ID 1 from mock data
    const [user] = useState<User>(getUserById(1));

    const{fields, handleChange} = useFormInputs({
        userName: user.userName,
        bio: user.bio,
        email: user.email,
        phone: user.phone,
        preferredContact: user.preferredContact
    })

    const [isEditing, setIsEditing] = useState(false);

    const [wishlist, setWishlist] = useState<Item[]>(itemDetails);

    const removeWishlistItem = (id: number) => {
        setWishlist((wishlistItems) => wishlistItems.filter((item) => item.id !== id));
    };

    const handleSaveEdit = async () => {
        if(isEditing) {
            // object with current field values (valies typed into inputs)
            const updatedUser: User = {
                id: user.id,
                userName: fields.userName as string,
                bio: fields.bio as string,
                email: fields.email as string,
                phone: fields.phone as string,
                preferredContact: fields.preferredContact as string,
            };

            // calls updateUser repo method to replace old user with new one, shows alert if something goes wrong and logs error for mroe details
            try {
                await updateUser(updatedUser);
                setIsEditing(false);
            } catch (error) {
                alert("Something went wrong. Please try again.")
                console.error(error)
            }
        } else {
            setIsEditing(true);
        }
    }

    return(
        <main>
            <div className="editProfile">
            </div>

            <section className="userInfo">
                <img src={ProfilePicturePlaceholder} alt="Profile Picture" className="profilePicture" />
                <div className="userText">
                        <h1>{fields.userName as string}</h1>

                        {isEditing ? (
                            <textarea
                                id="bio"
                                value={fields.bio as string}
                                onChange={handleChange}
                            />
                        ) : (
                            <p>{fields.bio as string}</p>
                        )} 

                        
                        <div className="contactInfo">
                        <h4>Contact Information: </h4> 

                        {isEditing ? (
                            <>
                                <input
                                    id="email"
                                    value={fields.email as string}
                                    onChange={handleChange}
                                />  

                                <input
                                    id="phone"
                                    value={fields.phone as string}
                                    onChange={handleChange}
                                /> 

                                <input
                                    id="preferredContact"
                                    value={fields.preferredContact as string}
                                    onChange={handleChange}
                                /> 
                            </>
                        ) : (<p>Email: {fields.email as string} | Phone: {fields.phone as string} | Preferred Method of Contact: {fields.preferredContact as string}</p>)}
                        
                        <button type="submit" onClick={handleSaveEdit}>
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