import ProfilePicturePlaceholder from "../../../assets/ProfilePicPlaceholder.png"
import "./userAccountComponent.css"
import { useState } from "react";
import type { Item } from "../../../types";
import itemDetails from "../../../jsonData/itemDetails.json"
import userInfo from "../../../jsonData/userInfo.json"
import { useFormInputs } from "../../../hooks/useFormInputs";

export default function UserAccount() {
    const{fields, errors, handleChange, validate} = useFormInputs({
        userName: userInfo[0].userName,
        bio: userInfo[0].bio,
        email: userInfo[0].email,
        phone: userInfo[0].phone,
        preferredContact: userInfo[0].preferredContact
    })

    const [isEditing, setIsEditing] = useState(false);

    const [wishlist, setWishlist] = useState<Item[]>(itemDetails);

    const removeWishlistItem = (id: number) => {
        setWishlist((wishlistItems) => wishlistItems.filter((item) => item.id !== id));
    };

    const handleSaveEdit = () => {
        if (isEditing) {
            const isValid = validate();
            if (isValid) {
                console.log("Validation successful. Saving changes:", fields);
                setIsEditing(false);
            } else {
                console.log("Validation failed. Errors:", errors);
            }
        } else {
            setIsEditing(true);
        }
    };

    const ErrorMessage = ({ fieldName }: { fieldName: string }) => (
        errors[fieldName] 
            ? <span style={{color: "red", display: "block", marginTop: "5px"}}>{errors[fieldName]}</span> 
            : null
    );

    return(
        <main>
            <div className="editProfile">
                        <button type="submit" onClick={handleSaveEdit}>
                            {isEditing ? "Save" : "Edit"} Profile
                        </button>
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
                        {isEditing && <ErrorMessage fieldName="bio" />}

                        <div className="contactInfo">
                        <h4>Contact Information: </h4> 

                        {isEditing ? (
                            <>
                                <label><b>Email: </b></label>
                                <input
                                    id="email"
                                    value={fields.email as string}
                                    onChange={handleChange}
                                />  
                                {isEditing && <ErrorMessage fieldName="email" />}

                                <label><b>Phone: </b></label>

                                <input
                                    id="phone"
                                    value={fields.phone as string}
                                    onChange={handleChange}
                                /> 
                                {isEditing && <ErrorMessage fieldName="phone" />}


                                <label><b>Preferred Method of Contact: </b></label>
                                <input
                                    id="preferredContact"
                                    value={fields.preferredContact as string}
                                    onChange={handleChange}
                                /> 
                                {isEditing && <ErrorMessage fieldName="preferredContact" />}
                            </>
                        ) : (<p>Email: {fields.email as string} | Phone: {fields.phone as string} | Preferred Method of Contact: {fields.preferredContact as string}</p>)}                        
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