import { PrismaClient } from "@prisma/client";
import { forumSeedData } from "./seedData";

const prisma = new PrismaClient();

async function main() {
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
}

main().then(
    async () => {
        await prisma.$disconnect();
        console.log("Seeding complete!");
    }
).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
});