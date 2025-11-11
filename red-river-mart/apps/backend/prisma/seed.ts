import { PrismaClient } from "@prisma/client";
import { itemSeedData } from "./seedData";

const prisma = new PrismaClient();

async function main() {
    await prisma. item.deleteMany();
    await prisma.item.createMany({
    data: itemSeedData.map((item) => ({
        name: item.name,
        category: item.category,
        price: item.price,
        description: item.description ?? "",
        src: item.src,
        sellerName: item.sellerName ?? "Demo Seller",
        sellerEmail: item.sellerEmail ?? "demo@example.com",
    })),
    skipDuplicates: true,
  });
}

main().then(
    async() => {
        await prisma.$disconnect()
    }
).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    // process.exit(1);
}); 
