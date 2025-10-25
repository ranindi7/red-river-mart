import { useState } from 'react';
import MarketplacePage from '../../pages/buyComponent/marketplacePage';
import type { Item } from '../../../types';
import { getAllItems, createItem } from '../../../apis/itemRepo';

export default function MarketplaceContainer() {
    // add state to hold items, initialized with sample data
    const [items, setItems] = useState<Item[]>(() => getAllItems());

    //  set state function to add a new item
    const handleAddItem = (newItemData: Omit<Item, 'id'>) => {
        createItem(newItemData);
        setItems(getAllItems);
    };

    return (
        <MarketplacePage items={items} onAddItem={handleAddItem} />
    );
}