import * as ForumRepo from "../apis/mockForumRepo";
import type { Forum } from "@shared/types/types";

export async function fetchForums(): Promise<Forum[]> {
  return ForumRepo.getAllForums();
}

export async function addForum(forum: Omit<Forum, "id">): Promise<Forum> {
  return ForumRepo.createForum(forum);
}

export async function updateForum(forum: Forum): Promise<Forum> {
  return ForumRepo.updateForum(forum);
}

export async function deleteForum(forumId: number): Promise<void> {
  return ForumRepo.deleteForum(forumId);
}
