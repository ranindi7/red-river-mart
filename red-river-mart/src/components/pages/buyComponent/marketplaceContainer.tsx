import { useState } from 'react';
import MarketplacePage from '../../pages/buyComponent/marketplacePage';
import itemData from "../../../jsonData/itemData.json";                 
import type { Item } from '../../../types';

export default function MarketplaceContainer() {
    // add state to hold items, initialized with sample data
    const [items, setItems] = useState<Item[]>(itemData as Item[]);

    //  set state function to add a new item
    const handleAddItem = (newItem: Item) => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    return (
        <MarketplacePage items={items} onAddItem={handleAddItem} />
    );
}