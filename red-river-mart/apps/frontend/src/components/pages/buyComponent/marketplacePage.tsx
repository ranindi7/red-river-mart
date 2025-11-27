import './buyPage.css';
import { useState, useEffect } from "react";
import FilterItems from "./filterPage";
import ItemPage from "./ItemPage";
import filterOptionsData from "../../../jsonData/filterOptions.json";
import type { Item, ActiveFilters, FilterOption } from "../../../../../../shared/types/types";
import SellPage from '../sellComponent/sellPage';
import ProductInfo from '../productInfoComponent/productInfo';
import { useUser } from '@clerk/clerk-react';

export default function MarketplacePage({ items, onAddItem }: { items: Item[]; onAddItem: (item: Omit<Item, 'id'>) => void }) {
    // state for filter options
    const [filterOptions] = useState<FilterOption[]>(filterOptionsData);
    
    // state for modal
    const [showSellModal, setShowSellModal] = useState(false);

    // state for search
    const [searchItem, setSearchItem] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState(searchItem);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedSearch(searchItem);
        }, 500);

        return () => clearTimeout(timeout); 
    }, [searchItem]);

    // state for active filters
    const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
        category: "all",
        sort: "none",
    });
    
    // state for active item
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    // filter and sort items based on active filters
    const filteredAndSortedItems = items
    .filter((item) => {
        // category filter
        if (activeFilters.category !== "all" && item.category !== activeFilters.category) {
            return false;
        }

        // search filter — case-insensitive
        if (debouncedSearch.trim() !== "" && !item.name.toLowerCase().includes(debouncedSearch.toLowerCase())) {
            return false;
        }

        return true;
    })
    .sort((a, b) => {
        if (activeFilters.sort === "priceLowToHigh") return a.price - b.price;
        if (activeFilters.sort === "priceHighToLow") return b.price - a.price;
        return 0;
    });

    const { isSignedIn, isLoaded } = useUser();

    if (!isLoaded) return <div>Loading Marketplace...</div>;
    if (!isSignedIn) return <div>Please sign in to view the marketplace.</div>;
    return (
        <section className="MarketplacePage">
            {/* search bar */}
            <input
                type="text"
                placeholder="Looking for something specific?"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                className="searchBar"
            />

            {/* mobile filter toggle */}
            <input type="checkbox" id="mobileToggle" className="mobileFilterCheck" />
            <label htmlFor="mobileToggle" className="mobileFilterTrig">
                <span>Filters/Sell</span>
            </label>
            
            {/* mobile filter */}
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

            <ItemPage items={filteredAndSortedItems} onItemClick={(item) => setSelectedItem(item)}/>

            {/* sell item modal */}
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

            {/* product listing modal */}
            {selectedItem && (
                <div className="ModalBackground" onClick={() => setSelectedItem(null)}>
                    <div className="ModalProduct" onClick={e => e.stopPropagation()}>
                        <button className="ModalClose" onClick={() => setSelectedItem(null)}>X</button>
                        <ProductInfo item={selectedItem} />
                    </div>
                </div>
            )}
        </section>
    );
}