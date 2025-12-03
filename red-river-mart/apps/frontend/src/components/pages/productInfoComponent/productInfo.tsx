import "./productInfo.css";
import type { Item } from "../../../../../../shared/types/types";
import { getCurrentUser } from "../../../hooks/getCurrentUser";


export default function ProductInfo ({ item }: { item: Item }) {
  const { dbUser, isSignedIn } = getCurrentUser();
  const teamsLink = `https://teams.microsoft.com/l/chat/0/0?users=${dbUser?.email}`;

  // Loading states
  if (!isSignedIn) return <p>Please sign in to view the listing.</p>;
  if (!dbUser) return <p>Loading listing...</p>;

  return (
    <section className="product">
      <div className="productImageBox">
        <img src={item.src} alt={item.name} />
      </div>

      <div className="productInfoContainer">
        <h2>Seller: {dbUser.firstName} {dbUser.lastName}</h2>
        <h1>{item.name}</h1>
        <h3>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</h3>
        <h3>${item.price.toFixed(2)}</h3>
        <div className="productInfoBox">
          <p>{item.description}</p>
        </div>

        <a href={teamsLink} target="_blank" rel="noopener noreferrer">
          <button className="messageButton">Message on Teams</button>
        </a>
      </div>
    </section>
  );
};