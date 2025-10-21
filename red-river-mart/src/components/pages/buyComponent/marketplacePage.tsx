import './buyPage.css';
import { useState } from "react";
import FilterItems from "./filterPage";
import ItemPage from "./ItemPage";
import filterOptionsData from "../../../jsonData/filterOptions.json";
import type { Item, ActiveFilters, FilterOption } from "../../../types";
import SellPage from '../sellComponent/sellPage'; // 👇 IMPORTANT: Make sure you import SellPage

export default function MarketplacePage({ items, onAddItem }: { items: Item[]; onAddItem: (item: Item) => void }) {
    // state for filter options
    const [filterOptions] = useState<FilterOption[]>(filterOptionsData);
    
    // 👇 ADD STATE FOR MODAL HERE
    const [showSellModal, setShowSellModal] = useState(false);

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
                // 👇 Pass the handler function down
                onOpenModal={() => setShowSellModal(true)}
            />
            <ItemPage items={filteredAndSortedItems} />

            {/* 👇 RENDER MODAL HERE, as a direct child of MarketplacePage */}
            {showSellModal && (
                <div className="ModalBackground" onClick={() => setShowSellModal(false)}>
                    <div className="ModalForm" onClick={e => e.stopPropagation()}>
                        <button className="ModalClose" onClick={() => setShowSellModal(false)}>X</button>
                        <SellPage onAddItem={(item) => {
                            onAddItem(item)
                            setShowSellModal(false)
                        }} />
                    </div>
                </div>
            )}
        </section>
    );
}