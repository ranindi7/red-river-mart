// import * as ItemRepo from "../apis/itemRepo";
// import { Item } from "@shared/types/types";

// export async function fetchItems(): Promise<Item[]> {
//   return ItemRepo.fetchItems();
// }

// export async function fetchItemsByCategory(category?: string): Promise<Item[]> {
//   const items = await ItemRepo.fetchItems();
//     if (category) {
//         return items.filter(item => item.category === category);
//   }
//   return items;
// }

// export async function addItem(item: Omit<Item, "id">): Promise<Item> {
//   return ItemRepo.createItem(item);
// }

// export async function updateItem(item: Item): Promise<Item> {
//   return ItemRepo.updateItem(item);
// }

// export async function deleteItem(itemId: number): Promise<void> {
//   return ItemRepo.deleteItem(itemId);
// }