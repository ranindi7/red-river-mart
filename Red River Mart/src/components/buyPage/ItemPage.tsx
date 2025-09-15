import type { Item } from "../../types";

export default function ItemPage({ items }: { items: Item[] }) {
  return (
    <section className="ItemPage">
      <h2>Marketplace</h2>
      <div>
        {items.map((item) => (
          <article key={item.id}>
            <img src={item.src} alt={item.name} height="100" />
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            {/* <p>{item.category}</p> */}
          </article>
        ))}
      </div>
    </section>
  );
}