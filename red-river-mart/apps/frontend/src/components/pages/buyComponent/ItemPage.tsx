import type { ItemPageProps } from "../../../../../../shared/types/types";

export default function ItemPage({ items, onItemClick }: ItemPageProps) {
  return (
    <section className="ItemPage">
      <div>
        {items.map((item) => (
          <article
            key={item.id}
            className="itemOption"
            onClick={() => onItemClick(item)}
          >
            <img src={item.src} alt={item.name} height={100} />
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}