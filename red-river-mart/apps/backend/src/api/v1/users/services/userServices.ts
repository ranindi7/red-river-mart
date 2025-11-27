import { User } from "@prisma/client";
import prisma from "../../../../../prisma/client"
import { clerkClient } from "@clerk/express";
// import { getUserByIdSchema } from "../validations/userValidation";


export const getUserById = async(id: string): Promise<User|null> => {
    const user: User | null = await prisma.user.findUnique(
        {
            where: {
                id: id
            }
        }
    );

    if (!user) {
        return null;
    } else {
        return user;
    }
}

export const createUser = async( userId: string ): Promise<User> => {
    const clerkUser = await clerkClient.users.getUser(userId);
    console.log("Clerk user data:", clerkUser);
    const newUser = await prisma.user.create({
        data: {
            id: userId,
            firstName: clerkUser.firstName || "",
            lastName: clerkUser.lastName || "",
            userName:
                clerkUser.username ||
                `${clerkUser.firstName ?? ""} ${clerkUser.lastName ?? ""}`.trim(),

            email: clerkUser.emailAddresses[0]?.emailAddress ?? "",
            phone: clerkUser.phoneNumbers[0]?.phoneNumber ?? "",
            bio: "",
            preferredContact: "email",
            profileImage: clerkUser.imageUrl
        },
    });
    return newUser;
}

export const fetchUsers = async(): Promise<User[]> => {
    return prisma.user.findMany()
};

// export const getUserById = async(id: number): Promise<User | null> => {
//   const user = await prisma.user.findUnique({
//     where: { id },
//   });

//   return user || null;
// };

// export const createUser = async (userData: {
//     userName: string;
//     bio: string;
//     email: string;
//     phone: string;
//     preferredContact: string;
// }): Promise<User> => {
//     const newUser: User = await prisma.user.create({
//         data: { ...userData },
//     });

//     return newUser;
// };

export const updateUser = async (
  id: string,
  userData: {
    userName?: string;
    bio?: string;
    email?: string;
    phone?: string;
    preferredContact?: string;
  }
): Promise<User> => {
  console.log("userData in service:", userData);  
  const updatedUser = await prisma.user.update({
    where: { id },  
    data: { ...userData },
  });

  return updatedUser;
};


export const deleteUser = async (id: string): Promise<void> => {
  await prisma.user.delete({
    where: { id },
  });
};
