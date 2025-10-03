import './buyPage.css';
import itemData from "../../../jsonData/itemData.json";
import { useState } from "react";
import FilterItems from "./filterPage";
import ItemPage from "./ItemPage";
import filterOptionsData from "../../../jsonData/filterOptions.json";
import type { Item, ActiveFilters, FilterOption } from "../../../types";

export default function MarketplacePage() {
    // sample data for itmems
    const [items] = useState<Item[]>(itemData);
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