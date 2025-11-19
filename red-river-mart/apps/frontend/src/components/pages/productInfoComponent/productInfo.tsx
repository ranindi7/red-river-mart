import "./productInfo.css";
import type { Item } from "../../../../../../shared/types/types";


export default function ProductInfo ({ item }: { item: Item }) {
  const teamsLink = `https://teams.microsoft.com/l/chat/0/0?users=${item.sellerEmail}`;

  return (
    <section className="product">
      <div className="productImageBox">
        <img src={item.src} alt={item.name} />
      </div>

      <div className="productInfoContainer">
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