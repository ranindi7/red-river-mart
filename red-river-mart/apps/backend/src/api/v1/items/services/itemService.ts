import { Item } from "@prisma/client";
import prisma from "../../../../../prisma/client";

export const fetchAllItems = async (): Promise<Item[]> => {
  return prisma.item.findMany({
    include: { seller: true },
  });
};

export const getItemById = async (id: number): Promise<Item | null> => {
  const item = await prisma.item.findUnique({
    where: { id },
    include: { seller: true },
  });

  return item || null;
};

export const createItem = async (itemData: {
  name: string;
  category: string;
  price: number;
  description: string;
  src?: string;
  sellerId: string;
}): Promise<Item> => {
  const newItem = await prisma.item.create({
    data: {
      name: itemData.name,
      category: itemData.category,
      price: itemData.price,
      description: itemData.description,
      src: itemData.src,
      sellerId: itemData.sellerId, 
    },
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
    sellerId?: string;
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
