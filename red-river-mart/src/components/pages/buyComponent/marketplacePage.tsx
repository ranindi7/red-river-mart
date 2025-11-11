import './buyPage.css';
import { useState } from "react";
import FilterItems from "./filterPage";
import ItemPage from "./ItemPage";
import filterOptionsData from "../../../jsonData/filterOptions.json";
import type { Item, ActiveFilters, FilterOption } from "../../../types";
import SellPage from '../sellComponent/sellPage';

export default function MarketplacePage({ items, onAddItem }: { items: Item[]; onAddItem: (item: Omit<Item, 'id'>) => void }) {
    // state for filter options
    const [filterOptions] = useState<FilterOption[]>(filterOptionsData);
    
    // state for modal
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
            {/* mobile filter toggle */}
            <input type="checkbox" id="mobileToggle" className="mobileFilterCheck" />
            <label htmlFor="mobileToggle" className="mobileFilterTrig">
                <span>Filters/Sell</span>
            </label>
            
            <div className="mobileFilter">
                <FilterItems
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
                filterOptions={filterOptions}
                onOpenModal={() => setShowSellModal(true)}
                />
            </div>

            {/* desktop filter */}
            <div className="desktopFilter">
                <FilterItems
                    activeFilters={activeFilters}
                    setActiveFilters={setActiveFilters}
                    filterOptions={filterOptions}
                    onOpenModal={() => setShowSellModal(true)}
                />
            </div>

            <ItemPage items={filteredAndSortedItems} />

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