import { PrismaClient } from "@prisma/client";
import { forumSeedData } from "./seedData";
// import { userSeedData } from "./seedData";
import { itemSeedData } from "./seedData";

const prisma = new PrismaClient();

async function main() { 
    // await prisma.user.deleteMany();
    
    // const createManyUsers = await prisma.user.createManyAndReturn(
    //     {
    //         data: userSeedData,
    //         skipDuplicates: true
    //     }
    // );

    // console.log(`CREATED USERS: ${createManyUsers}`)
  
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
            sellerName: item.sellerName ?? "Demo Seller",
            sellerEmail: item.sellerEmail ?? "demo@example.com",
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

