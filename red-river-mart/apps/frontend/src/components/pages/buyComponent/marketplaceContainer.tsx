    import { useState, useEffect } from 'react';
    import MarketplacePage from './marketplacePage';
    import type { Item } from '../../../../../../shared/types/types';
    import * as ItemService from '../../../apis/itemRepo';
    import { getCurrentUser } from '../../../hooks/getCurrentUser';

    export default function MarketplaceContainer() {
        // add state to hold items, initialized with sample data
        const [items, setItems] = useState<Item[]>([]);
        const { dbUser, isSignedIn } = getCurrentUser();
        
        // const userId = dbUser!.id;
        
        // fetch all items on mount
        useEffect(() => {
            if (!dbUser) return;

            const fetchItems = async () => {
                const fetchedItems = await ItemService.fetchItems();
                const filteredItems = fetchedItems.filter(item => item.sellerId !== dbUser?.id);
                setItems(filteredItems);
            };
            fetchItems();
        }, [dbUser]);

        // Loading states
        if (!isSignedIn) return <p>Please sign in to view the marketplace.</p>;
        if (!dbUser) return <p>Loading marketplace...</p>;

        // add a new item
        const handleAddItem = async (newItemData: Omit<Item, 'id'>) => {    
            const newItem = await ItemService.createItem(newItemData);
            setItems(prevItems => [...prevItems, newItem]);
        };

        return (
            <MarketplacePage items={items} onAddItem={handleAddItem} />
        );
    }