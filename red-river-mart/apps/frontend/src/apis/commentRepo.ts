import { Comment } from "../../../../shared/types/types";

type CommentsResponseJSON = { message: string; data: Comment[] };
type CommentResponseJSON = { message: string; data: Comment };

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const COMMENT_ENDPOINT = "/comments";

export async function fetchCommentsByForumId(forumId: number,sessionToken?: string | null
): Promise<Comment[]> {
  const response: Response = await fetch(
    `${BASE_URL}${COMMENT_ENDPOINT}/forum/${forumId}`,
    sessionToken
      ? {
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          },
        }
      : undefined
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch comments for forum ${forumId}`);
  }

  const json: CommentsResponseJSON = await response.json();
  return json.data;
}

export async function getCommentById(commentId: number,sessionToken?: string | null
): Promise<Comment> {
  const response: Response = await fetch(
    `${BASE_URL}${COMMENT_ENDPOINT}/${commentId}`,
    sessionToken
      ? {
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          },
        }
      : undefined
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch comment with id ${commentId}`);
  }

  const json: CommentResponseJSON = await response.json();
  return json.data;
}

export async function addComment(comment: { forumId: number; text: string },sessionToken?: string | null
): Promise<Comment> {
  const response: Response = await fetch(`${BASE_URL}${COMMENT_ENDPOINT}`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to create comment");
  }

  const json: CommentResponseJSON = await response.json();
  return json.data;
}

export async function updateComment(comment: { id: number; text: string },sessionToken?: string | null
): Promise<Comment> {
  const response: Response = await fetch(
    `${BASE_URL}${COMMENT_ENDPOINT}/${comment.id}`,
    {
      method: "PUT",
      body: JSON.stringify({ text: comment.text }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to update comment with id ${comment.id}`);
  }

  const json: CommentResponseJSON = await response.json();
  return json.data;
}

export async function deleteComment(commentId: number,sessionToken?: string | null): Promise<void> {
  const response: Response = await fetch(
    `${BASE_URL}${COMMENT_ENDPOINT}/${commentId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${sessionToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to delete comment with id ${commentId}`);
  }
}