import type { FilterItemsProps } from "../../types";

// vscode fixed this import automatically ie. FilterItemsProps
export default function FilterItems({ activeFilters, setActiveFilters }: FilterItemsProps) {
    const filterOptions = [
        { id: 1, name: "Price: Low to High", sort: "priceLowToHigh" },
        { id: 2, name: "Price: High to Low", sort: "priceHighToLow" },
        { id: 3, name: "Electronics", category: "electronics" },
        { id: 4, name: "Clothing", category: "clothing" },
        { id: 5, name: "Books", category: "books" },
        { id: 6, name: "Accessories", category: "accessories" },
    ];

    // reset filters button
    const handleResetFilters = () => {
        setActiveFilters({ category: "all", sort: "none" });
    };

    
    return (
        <section className="FilterPage">
            
            <h2>Filters</h2>
            <button onClick={handleResetFilters}>Reset Filters</button>
            <ul>
                {filterOptions.map((filter) => {
                    const isActive =
                    (filter.sort && activeFilters.sort === filter.sort) ||
                    (filter.category && activeFilters.category === filter.category);

                    return (
                    <li key={filter.id}>
                        <button className={isActive ? "active" : ""}
                            onClick={() => {
                                if (filter.sort) {
                                setActiveFilters({ ...activeFilters, sort: filter.sort });
                                } else if (filter.category) {
                                setActiveFilters({ ...activeFilters, category: filter.category });
                                }
                            }}
                        >{filter.name}</button>
                    </li>
                    );
                })}
            </ul>
        </section>
    );
};