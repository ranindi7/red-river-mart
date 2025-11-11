import type { Item } from "../../../../shared/types/types";
import { itemData } from "./mockItemRepo"

let items: Item[] = [...itemData];
let nextId: number = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;

export function getAllItems(): Item[] {
    return [...items]; 
};

export function getItemById(id: number): Item | undefined {
    return items.find(item => item.id === id)
};

export function createItem(newItemData: Omit<Item, 'id'>): Item {
    const newItem: Item = {
        id: nextId++,
        ...newItemData
    };
    items.push(newItem);
    return newItem;
}

export function updateItem(updatedItem: Item): Item | undefined {
    const itemIndex = items.findIndex(item => item.id === updatedItem.id);

    if (itemIndex !== -1) {
        items[itemIndex] = updatedItem; 
        return updatedItem;
    }
    
    return undefined;
};

export function deleteItem(id: number): boolean {
    const initialLength = items.length;
    items = items.filter(item => item.id !== id);
    return items.length < initialLength;
};
