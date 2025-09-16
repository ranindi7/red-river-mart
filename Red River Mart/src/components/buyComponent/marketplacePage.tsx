import './buyPage.css';

import { useState } from "react";
import FilterItems from "./filterPage";
import ItemPage from "./ItemPage";
import placeholder from "../../assets/placeholder.png";

import type { Item, ActiveFilters } from "../../types";

export default function MarketplacePage() {
    // sample data for itmems
    const [items] = useState<Item[]>([
        { id: 1, name: "USB Flash Drive 32GB", category: "electronics", price: 25.00, src: placeholder },
        { id: 2, name: "Wireless Mouse", category: "electronics", price: 18.50, src: placeholder },
        { id: 3, name: "Portable Power Bank", category: "electronics", price: 30.00, src: placeholder },
        { id: 4, name: "Headphones", category: "electronics", price: 45.00, src: placeholder },
        { id: 5, name: "School Hoodie", category: "clothing", price: 35.00, src: placeholder },
        { id: 6, name: "Graphic T-Shirt", category: "clothing", price: 20.00, src: placeholder },
        { id: 7, name: "Baseball Cap", category: "clothing", price: 15.00, src: placeholder },
        { id: 8, name: "Winter Jacket", category: "clothing", price: 60.00, src: placeholder },
        { id: 9, name: "Math Textbook", category: "books", price: 55.00, src: placeholder },
        { id: 10, name: "English Literature Book", category: "books", price: 40.00, src: placeholder },
        { id: 11, name: "Journal/Planner", category: "books", price: 15.00, src: placeholder },
        { id: 12, name: "Sketchbook", category: "books", price: 12.00, src: placeholder },
        { id: 13, name: "Reusable Water Bottle", category: "accessories", price: 10.00, src: placeholder },
        { id: 14, name: "Keychain Lanyard", category: "accessories", price: 5.00, src: placeholder },
        { id: 15, name: "Backpack", category: "accessories", price: 45.00, src: placeholder },
        { id: 16, name: "Phone Case", category: "accessories", price: 12.50, src: placeholder },
        { id: 17, name: "Laptop Sleeve", category: "electronics", price: 25.00, src: placeholder },
        { id: 18, name: "Smartwatch", category: "electronics", price: 150.00, src: placeholder },
        { id: 19, name: "USB-C Cable", category: "electronics", price: 8.00, src: placeholder },
        { id: 20, name: "Denim Jeans", category: "clothing", price: 45.00, src: placeholder },
        { id: 21, name: "Winter Scarf", category: "clothing", price: 22.00, src: placeholder },
        { id: 22, name: "Gym Shorts", category: "clothing", price: 28.00, src: placeholder },
        { id: 23, name: "Fleece Joggers", category: "clothing", price: 38.00, src: placeholder },
        { id: 24, name: "Science Textbook", category: "books", price: 65.00, src: placeholder },
        { id: 25, name: "Fantasy Novel", category: "books", price: 18.00, src: placeholder },
        { id: 26, name: "Cookbook", category: "books", price: 25.00, src: placeholder },
        { id: 27, name: "Digital Stylus", category: "accessories", price: 50.00, src: placeholder },
        { id: 28, name: "Laptop Stand", category: "accessories", price: 35.00, src: placeholder },
        { id: 29, name: "Sunglasses", category: "accessories", price: 20.00, src: placeholder },
        { id: 30, name: "Notebook", category: "books", price: 8.00, src: placeholder },
    ]);

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
            />
            <ItemPage items={filteredAndSortedItems} />
        </section>
    );
}