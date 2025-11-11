import { PrismaClient } from "@prisma/client";
import { userSeedData } from "./seedData";

const prisma = new PrismaClient();

async function main() { 
    await prisma.user.deleteMany();
    
    const createManyUsers = await prisma.user.createManyAndReturn(
        {
            data: userSeedData,
            skipDuplicates: true
        }
    );

    console.log(`CREATED USERS: ${createManyUsers}`)
};

main().then(
    async() => {
        await prisma.$disconnect()
    }
).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
   // process.exit(1);
}); 