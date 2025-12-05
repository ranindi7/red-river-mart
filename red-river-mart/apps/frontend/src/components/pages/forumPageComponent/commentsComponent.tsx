import { useEffect, useState } from "react";
import type { Comment, CommentProps } from "../../../../../../shared/types/types";
import { getCurrentUser } from "../../../hooks/getCurrentUser";
import * as CommentService from "../../../apis/commentRepo";

export default function CommentsComponent({ forumId }: CommentProps) {
  // The state for the comments in a forum
  const [comments, setComments] = useState<Comment[]>([]);
  // This tracks the newest comment
  const [commentAdd, setcommentAdd] = useState("");
  // This state togglles the delete mode for comments
  const [deleteMode, setDeleteMode] = useState(false);
  // This state is what tracks which comments are selected to be deleted
  const [selectedComments, setSelectedComments] = useState<number[]>([]);
  //This state tracks which comment is getting edited
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  const { dbUser, getToken } = getCurrentUser();
  
  // Fetches the comments from the specific forum from the backend and stores it in state
  useEffect(() => {
    if (!dbUser) return;
    const fetchComments = async () => {
        const token = await getToken();
        if (!token) return;
        const fetched = await CommentService.fetchCommentsByForumId(forumId, token);
        setComments(fetched);
    };
    fetchComments();
    }, [forumId, dbUser]);

  // This handles adding the new comment to the backend and update the state
  const handleAddComment = async () => {
    if (!commentAdd.trim() || !dbUser) return;
    try {
      const token = await getToken();
      if (!token) return;
      const newComment = await CommentService.addComment(
        { forumId, text: commentAdd },
        token
      );
      setComments((previous) => [...previous, newComment]);
      setcommentAdd("");
    } catch (err) {
      console.error(err);
    }
  };

  // This handles updating a comment in the backend and update the state
  const handleUpdateComment = async (commentId: number) => {
    if (!editingText.trim()) return;
    try {
      const token = await getToken();
      if (!token) return;
      const updated = await CommentService.updateComment(
        { id: commentId, text: editingText },
        token
      );
      setComments((previous) =>
        previous.map((comment) =>
          comment.id === commentId ? updated : comment
        )
      );
      setEditingCommentId(null);
      setEditingText("");
    } catch (err) {
      console.error(err);
    }
  };

  // This handles delecting the comments that is selected and also updating state
  const handleDeleteSelected = async () => {
    if (!dbUser || selectedComments.length === 0) return;
    try {
      const token = await getToken();
      if (!token) return;
      await Promise.all(
        selectedComments.map((id) =>
          CommentService.deleteComment(id, token)
        )
      );
      setComments((previous) =>
        previous.filter((comment) => !selectedComments.includes(comment.id))
      );
      setSelectedComments([]);
      setDeleteMode(false);
    } catch (err) {
      console.error(err);
    }
  };

  // This toggles the delete mode on the forums
  const toggleDeleteMode = () => {
    setDeleteMode((previous) => !previous);
    setSelectedComments([]);
  };

  // This selects or unselect a comment that may be deleted
  const handleSelectedComments = (commentId: number) => {
    setSelectedComments((previous) =>
      previous.includes(commentId)
        ? previous.filter((id) => id !== commentId)
        : [...previous, commentId]
    );
  };

  return (
    <div className="commentsSection">
      <div className="commentButtons">
        <button onClick={toggleDeleteMode}>
          {deleteMode ? "Cancel Delete" : "Delete Comment"}
        </button>{deleteMode && (<button onClick={handleDeleteSelected}>
            Delete Selected
          </button>
        )}
      </div>
      <h4>Replies</h4>
      {comments.map((comment) => (
        <div key={comment.id} className="commentRow">
          {deleteMode && (
            <input
              type="checkbox"
              checked={selectedComments.includes(comment.id)}
              onChange={() => handleSelectedComments(comment.id)}
            />
          )}
          {editingCommentId === comment.id ? (
            <>
              <textarea
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
              <button onClick={() => handleUpdateComment(comment.id)}>Save</button>
              <button onClick={() => setEditingCommentId(null)}>Cancel</button>
            </>
          ) : (
        <p className="comment">
        <span>
            <strong>{comment.user?.firstName} {comment.user?.lastName}:</strong> {comment.text}
        </span>
        {comment.userId === dbUser?.id && !deleteMode && (
            <button
            className="editButton"
            onClick={() => {
                setEditingCommentId(comment.id);
                setEditingText(comment.text);
            }}
            >
            Edit
            </button>
        )}
        </p>
          )}
        </div>
      ))}
      <div className="commentInputSection">
        <textarea
          placeholder="Write a Comment..."
          value={commentAdd}
          onChange={(e) => setcommentAdd(e.target.value)}
          className="commentAdd"
        />
        <button onClick={handleAddComment} disabled={!dbUser}>Add Comment</button>
      </div>

    </div>
  );
}
