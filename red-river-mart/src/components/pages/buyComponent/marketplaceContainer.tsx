// src/components/MarketplaceContainer.tsx (New File)
import { useState } from 'react';
import MarketplacePage from '../../pages/buyComponent/marketplacePage'; 
import SellPage from '../../pages/sellComponent/sellPage';             
import itemData from "../../../jsonData/itemData.json";                 
import type { Item } from '../../../types';
import type { MarketplaceContainerProp } from '../../../types';

export default function MarketplaceContainer({path}: MarketplaceContainerProp) {
    // add state to hold items, initialized with sample data
    const [items, setItems] = useState<Item[]>(itemData as Item[]);

    //  set state function to add a new item
    const handleAddItem = (newItem: Item) => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    if (path === "sell") {
        return <SellPage onAddItem={handleAddItem} />;
    } else {
        return <MarketplacePage items={items} />;
    };
}