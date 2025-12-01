import { PrismaClient } from "@prisma/client";
import { forumSeedData } from "./seedData";
// import { userSeedData } from "./seedData";
import { itemSeedData } from "./seedData";
import { clerkClient } from "@clerk/clerk-sdk-node";

const prisma = new PrismaClient();

async function main() { 
    // used clerk to get user data
    await prisma.user.deleteMany();
    const clerkUsers = await clerkClient.users.getUserList();

    const usersToInsert = clerkUsers.map((u) => ({
        id: u.id,
        firstName: u.firstName || "",
        lastName: u.lastName || "",
        userName: u.username || `${u.firstName ?? ""} ${u.lastName ?? ""}`.trim(),
        email: u.emailAddresses[0]?.emailAddress ?? "",
        phone: u.phoneNumbers[0]?.phoneNumber ?? "",
        bio: "",
        preferredContact: "email",
        profileImage: u.imageUrl,
    }));

    await prisma.user.createMany({
        data: usersToInsert,
        skipDuplicates: true,
    });
  
    await prisma.forum.deleteMany();
    await prisma.forum.createMany({
        data: forumSeedData.map((forum) => ({
            subject: forum.subject ?? "No subject",
            title: forum.title ?? "No title",
            description: forum.description ?? "No description",
            date: forum.date ?? new Date().toLocaleDateString(),
        })),
        skipDuplicates: true,
    });

    await prisma.item.deleteMany();
    await prisma.item.createMany({
        data: itemSeedData.map((item) => ({
            name: item.name,
            category: item.category,
            price: item.price,
            description: item.description,
            src: item.src,
            sellerId: item.sellerId
        })),
        skipDuplicates: true,
    });
};

main().then(
    async() => {
        await prisma.$disconnect()
        console.log("Seeding complete!");
    }
).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
});

