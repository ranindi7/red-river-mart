import { PrismaClient } from "@prisma/client";
import { forumSeedData, itemSeedData } from "./seedData";
import { clerkClient } from "@clerk/clerk-sdk-node";

const prisma = new PrismaClient();

async function main() {
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

  await prisma.comment.deleteMany();
  await prisma.forum.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.createMany({
    data: usersToInsert,
    skipDuplicates: true,
  });

  for (const forum of forumSeedData) {
    await prisma.forum.create({
      data: {
        subject: forum.subject!,
        title: forum.title,
        description: forum.description,
        date: forum.date,
        author: { connect: { id: forum.authorId } },
        comments: {
          create: [
            {
              text: "This is a sample comment!",
              user: { connect: { id: usersToInsert[0]?.id } },
            },
            {
              text: "Another example comment.",
              user: { connect: { id: usersToInsert[1]?.id } },
            },
          ],
        },
      },
    });
  }

  await prisma.item.createMany({
    data: itemSeedData.map((item) => ({
      name: item.name,
      category: item.category,
      price: item.price,
      description: item.description,
      src: item.src,
      sellerId: item.sellerId,
    })),
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Seeding complete!");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
