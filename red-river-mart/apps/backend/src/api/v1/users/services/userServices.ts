import { User } from "@prisma/client";
import prisma from "../../../../../prisma/client"

export const fetchUsers = async(): Promise<User[]> => {
    return prisma.user.findMany()
};

export const getUserById = async(id: number): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  return user || null;
};

export const createUser = async (userData: {
    userName: string;
    bio: string;
    email: string;
    phone: string;
    preferredContact: string;
}): Promise<User> => {
    const newUser: User = await prisma.user.create({
        data: { ...userData },
    });

    return newUser;
};

export const updateUser = async (
  id: number,
  userData: {
    userName?: string;
    bio?: string;
    email?: string;
    phone?: string;
    preferredContact?: string;
  }
): Promise<User> => {
  const updatedUser = await prisma.user.update({
    where: { id },
    data: { ...userData },
  });

  return updatedUser;
};

export const deleteUser = async (id: number): Promise<void> => {
  await prisma.user.delete({
    where: { id },
  });
};
