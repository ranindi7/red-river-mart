import prisma from "../../../../../prisma/client";
import type { Comment } from "@prisma/client";

export const getAllComments = async (): Promise<Comment[]> => {
  return prisma.comment.findMany({
    include: { user: true, forum: true },
  });
};

export const getCommentsByForumId = async (forumId: number): Promise<Comment[]> => {
  return prisma.comment.findMany({
    where: { forumId },
    include: { user: true },
    orderBy: { id: "asc" },
  });
};

export const getCommentById = async (id: number): Promise<Comment | null> => {
  return prisma.comment.findUnique({ where: { id } });
};

export const createComment = async (data: {
  text: string;
  forumId: number;
  userId: string;
}): Promise<Comment> => {
  return prisma.comment.create({
    data,
    include: { user: true },
  });
};

export const updateComment = async (
  id: number,
  userId: string,
  newText: string
): Promise<Comment> => {
  const comment = await prisma.comment.findUnique({ where: { id } });
  if (!comment)
    throw new Error("Comment was not found");
  if (comment.userId !== userId) 
    throw new Error("Unauthorized");

  return prisma.comment.update({
    where: { id },
    data: { text: newText },
    include: { user: true }
  });
};

export const deleteComment = async (id: number, userId: string): Promise<void> => {
  const comment = await prisma.comment.findUnique({ where: { id } });
  if (!comment)
    throw new Error("Comment was not found");
  if (comment.userId !== userId)
    throw new Error("Unauthorized Acess");

  await prisma.comment.delete
  ({ where: { id },
});
};
