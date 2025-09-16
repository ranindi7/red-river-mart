import type { productInfo } from "../../types";
import "./productInfo.css";

const Info = () => {
  const product: productInfo = {
    id: 1,name: "Bayle Castillo", title: "Used Mouse", category: "Electronics", price: 15.0, info: "I dont need this mouse anymore selling for $15 OBO",
  };

  return (
<section className="product">
  <div className="productImageBox">
    <img src="/usedMouse.png" alt="Used Mouse" />
  </div>

  <div className="productInfoContainer">
    <h3>{product.name}</h3>
    <h2>{product.title}</h2>
    <h3>{product.category}</h3>
    <h3>${product.price}</h3>
    <div className="productInfoBox">
    <p>{product.info}</p>
    </div>

    <div className="sendMessage">
      <input type="text" placeholder="Is this still for sale?" />
      <button>Send</button>
    </div>
  </div>
</section>
  );
};

export default Info;