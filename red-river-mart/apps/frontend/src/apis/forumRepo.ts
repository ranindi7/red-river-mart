import type { Forum } from "../../../../shared/types/types";

type ForumsResponseJSON = { message: string; data: Forum[] };
type ForumResponseJSON = { message: string; data: Forum };

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const FORUM_ENDPOINT = "/forums";

export async function fetchForums(sessionToken?: string | null): Promise<Forum[]> {
  const response: Response = await fetch(`${BASE_URL}${FORUM_ENDPOINT}`, 
    sessionToken
      ? { headers: { Authorization: `Bearer ${sessionToken}` } }
      : undefined
  );

  if (!response.ok) {
    throw new Error("Failed to fetch forums");
  }

  const json: ForumsResponseJSON = await response.json();
  return json.data;
}

export async function getForumById(id: number, sessionToken?: string | null): Promise<Forum> {
  const response: Response = await fetch(`${BASE_URL}${FORUM_ENDPOINT}/${id}`, 
    sessionToken
      ? { headers: { Authorization: `Bearer ${sessionToken}` } }
      : undefined
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch forum with id ${id}`);
  }

  const json: ForumResponseJSON = await response.json();
  return json.data;
}

export async function addForum(forum: Omit<Forum, "id">, sessionToken?: string | null): Promise<Forum> {
  const response: Response = await fetch(`${BASE_URL}${FORUM_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionToken}`,
    },
    body: JSON.stringify(forum),
  });

  if (!response.ok) {
    throw new Error("Failed to create forum");
  }

  const json: ForumResponseJSON = await response.json();
  return json.data;
}

export async function updateForum(forum: Forum, sessionToken?: string | null): Promise<Forum> {
  const response: Response = await fetch(`${BASE_URL}${FORUM_ENDPOINT}/${forum.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionToken}`,
    },
    body: JSON.stringify(forum),
  });

  if (!response.ok) {
    throw new Error(`Failed to update forum with id ${forum.id}`);
  }

  const json: ForumResponseJSON = await response.json();
  return json.data;
}

export async function deleteForum(id: number, sessionToken?: string | null): Promise<void> {
  const response: Response = await fetch(`${BASE_URL}${FORUM_ENDPOINT}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${sessionToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to delete forum with id ${id}`);
  }
}
