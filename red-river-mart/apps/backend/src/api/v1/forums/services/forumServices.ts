import prisma from "../../../../../prisma/client";
import type { Forum } from "@prisma/client";

export const getAllForums = async (): Promise<Forum[]> => {
  return prisma.forum.findMany();
};

export const getForumById = async (id: number): Promise<Forum | null> => {
  return prisma.forum.findUnique({
    where: { id },
  });
};

export const createForum = async (data: {
  subject: string;
  title: string;
  description: string;
  date?: string;
  authorId: string;
}): Promise<Forum> => {
  return prisma.forum.create({
    data: {
      subject: data.subject,
      title: data.title,
      description: data.description,
      date: data.date ?? new Date().toLocaleDateString(),
      authorId: data.authorId,
    },
  });
};

export const updateForum = async (
  id: number,
  forumData: {
    subject?: string;
    title?: string;
    description?: string;
    date?: string;
    authorId?: string;
  }
): Promise<Forum> => {
  return prisma.forum.update({
    where: { id },
    data: { ...forumData },
  });
};

export const deleteForum = async (id: number): Promise<void> => {
  await prisma.forum.delete({
    where: { id },
  });
};
