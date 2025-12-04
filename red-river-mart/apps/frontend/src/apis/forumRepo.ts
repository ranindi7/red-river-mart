import type { Forum } from "../../../../shared/types/types";

type ForumsResponseJSON = { message: string; data: Forum[] };
type ForumResponseJSON = { message: string; data: Forum };

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1/forums`;

export async function getAllForums(): Promise<Forum[]> {
  const response: Response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch the forums");
  }

  const json: ForumsResponseJSON = await response.json();
  return json.data;
}

export async function getForumById(id: number): Promise<Forum> {
  const response: Response = await fetch(`${BASE_URL}/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch the forum with id ${id}`);
  }

  const json: ForumResponseJSON = await response.json();
  return json.data;
}

export async function createForum(forum: Omit<Forum, "id">): Promise<Forum> {
  const response: Response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(forum),
  });

  if (!response.ok) {
    throw new Error("Failed to create the forum");
  }

  const json: ForumResponseJSON = await response.json();
  return json.data;
}

export async function updateForum(forum: Forum): Promise<Forum> {
  const response: Response = await fetch(`${BASE_URL}/${forum.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(forum),
  });

  if (!response.ok) {
    throw new Error(`Failed to update forum with the id ${forum.id}`);
  }

  const json: ForumResponseJSON = await response.json();
  return json.data;
}

export async function deleteForum(id: number): Promise<void> {
  const response: Response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Failed to delete forum with the id ${id}`);
  }
}
