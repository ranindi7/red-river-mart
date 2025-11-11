import { useState, useEffect } from 'react';
import MarketplacePage from './marketplacePage';
import type { Item } from '../../../../../../shared/types/types';
import * as ItemService from '../../../service/itemService';

export default function MarketplaceContainer() {
    // add state to hold items, initialized with sample data
    const [items, setItems] = useState<Item[]>([]);

    // Fetch all items on mount
    useEffect(() => {
        const fetchItems = async () => {
            const fetchedItems = await ItemService.fetchItems();
            setItems(fetchedItems);
        };
        fetchItems();
    }, []);

    // Add a new item
    const handleAddItem = async (newItemData: Omit<Item, 'id'>) => {    
        const newItem = await ItemService.addItem(newItemData);
        setItems(prevItems => [...prevItems, newItem]);
        
    };

    return (
        <MarketplacePage items={items} onAddItem={handleAddItem} />
    );
}