import { Item } from "../../../../shared/types/types";

type ItemsResponseJSON = { message: string; data: Item[] };
type ItemResponseJSON = { message: string; data: Item };

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const ITEM_ENDPOINT = "/items";

export async function fetchItems(sessionToken?: string|null): Promise<Item[]> {
  const response: Response = await fetch(
    `${BASE_URL}${ITEM_ENDPOINT}`,
      sessionToken? {
          headers: {
              Authorization: `Bearer ${sessionToken}`,
          } 
      } : undefined
  );

  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }

  const json: ItemsResponseJSON = await response.json();
  return json.data;
}

export async function getItemById(itemId: number, sessionToken?: string|null): Promise<Item> {
  const response: Response = await fetch(
    `${BASE_URL}${ITEM_ENDPOINT}/${itemId}`,
      sessionToken? {
          headers: {
              Authorization: `Bearer ${sessionToken}`,
          } 
      } : undefined
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch item with id ${itemId}`);
  }

  const json: ItemResponseJSON = await response.json();
  return json.data;
}

export async function createItem(item: Omit<Item, "id">, sessionToken?: string|null): Promise<Item> {
  const response: Response = await fetch(
    `${BASE_URL}${ITEM_ENDPOINT}`, 
    {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create item");
  }

  const json: ItemResponseJSON = await response.json();
  return json.data;
}

export async function updateItem(item: Item, sessionToken?: string|null): Promise<Item> {
  const response: Response = await fetch(
    `${BASE_URL}${ITEM_ENDPOINT}/${item.id}`, 
    {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to update item with id ${item.id}`);
  }

  const json: ItemResponseJSON = await response.json();
  return json.data;
}

export async function deleteItem(itemId: number,sessionToken?: string|null): Promise<void> {
  const response: Response = await fetch(`${BASE_URL}${ITEM_ENDPOINT}/${itemId}`, 
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${sessionToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to delete item with id ${itemId}`);
  }
}