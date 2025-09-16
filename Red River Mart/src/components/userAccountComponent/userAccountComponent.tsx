import ProfilePicturePlaceholder from "../../assets/ProfilePicPlaceholder.png"
import placeholder from "../../assets/placeholder.png"
import "./userAccountComponent.css"

export default function UserAccount() {
    const userDetails = {
        userName: "Ranindi Gunasekera",
        bio: "Hello! I am a student in the AD&D program and I am interested in buying and selling computer parts"
    };

    const itemDetails = [
        { id: 1, name: "USB Flash Drive 32GB", category: "Electronics", price: 25.00, src: placeholder, seller: "Ranindi Gunasekera", status: "sold" },
        { id: 2, name: "Bracelet", category: "Accessories", price: 40.00, src: placeholder, seller: "Ranindi Gunasekera", status: "sold" },
        { id: 3, name: "GAP Hoodie", category: "Clothing", price: 10.00, src: placeholder, seller: "Ranindi Gunasekera", status: "sold" },
    ]

    return(
        <main>
            <section className="userInfo">
                <img src={ProfilePicturePlaceholder} alt="Profile Picture" className="profilePicture" />
                <div className="userText">
                    <h1>{userDetails.userName}</h1>
                    <p>{userDetails.bio}</p>
                </div>
            </section>

            <section className="userProducts">
                <h3>Listed Products</h3>
                <ul>
                    {itemDetails.map(item => (
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
            </section>
        </main>
    )
}