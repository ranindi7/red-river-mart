import './buyPage.css';
import { useState } from "react";
import FilterItems from "./filterPage";
import ItemPage from "./ItemPage";
import filterOptionsData from "../../../jsonData/filterOptions.json";
import type { Item, ActiveFilters, FilterOption } from "../../../types";

export default function MarketplacePage({items}: { items: Item[] }) {
    // state for filter options
    const [filterOptions] = useState<FilterOption[]>(filterOptionsData);

    // state for active filters
    const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
        category: "all",
        sort: "none",
    });
    
    // filter and sort items based on active filters
    const filteredAndSortedItems = items.filter((item) => {
        if (activeFilters.category === "all") {
            return true;
        }
        return item.category === activeFilters.category;
    }).sort((a, b) => {
        if (activeFilters.sort === "priceLowToHigh") {
            return a.price - b.price;
        }
        if (activeFilters.sort === "priceHighToLow") {
            return b.price - a.price;
        }
        return 0;
    });

    return (
        <section className="MarketplacePage">
            <FilterItems
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
                filterOptions={filterOptions}
            />
            <ItemPage items={filteredAndSortedItems} />
        </section>
    );
}