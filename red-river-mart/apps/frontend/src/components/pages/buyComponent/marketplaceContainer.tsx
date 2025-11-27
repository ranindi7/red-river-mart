import { useState, useEffect } from 'react';
import MarketplacePage from './marketplacePage';
import type { Item } from '../../../../../../shared/types/types';
import * as ItemService from '../../../apis/itemRepo';

export default function MarketplaceContainer() {
    // add state to hold items, initialized with sample data
    const [items, setItems] = useState<Item[]>([]);

    // fetch all items on mount
    useEffect(() => {
        const fetchItems = async () => {
            const fetchedItems = await ItemService.fetchItems();
            setItems(fetchedItems);
        };
        fetchItems();
    }, []);

    // add a new item
    const handleAddItem = async (newItemData: Omit<Item, 'id'>) => {    
        const newItem = await ItemService.createItem(newItemData);
        setItems(prevItems => [...prevItems, newItem]);
        
    };

    return (
        <MarketplacePage items={items} onAddItem={handleAddItem} />
    );
}