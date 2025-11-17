import { Item } from "@prisma/client";
import prisma from "../../../../../prisma/client";

export const fetchAllItems = async (): Promise<Item[]> => {
  return prisma.item.findMany();
};

export const getItemById = async (id: number): Promise<Item | null> => {
  const item = await prisma.item.findUnique({
    where: { id },
  });

  return item || null;
};

export const createItem = async (itemData: {
  name: string;
  category: string;
  price: number;
  description: string;
  src: string;
  sellerName?: string;
  sellerEmail?: string;
}): Promise<Item> => {
  const newItem: Item = await prisma.item.create({
    data: { ...itemData },
  });

  return newItem;
};

export const updateItem = async (
  id: number,
  itemData: {
    name?: string;
    category?: string;
    price?: number;
    description?: string;
    src?: string;
    sellerName?: string;
    sellerEmail?: string;
  }
): Promise<Item> => {
  const updatedItem = await prisma.item.update({
    where: { id },
    data: { ...itemData },
  });

  return updatedItem;
};

export const deleteItem = async (id: number): Promise<void> => {
  await prisma.item.delete({
    where: { id },
  });
};
