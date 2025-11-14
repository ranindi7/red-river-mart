import "./forumPage.css";
import { useEffect, useState } from "react";
import type { Forum, Comment } from "../../../../../../shared/types/types";
import MakeForum from "../makeForumComponent/makeForumPage";
import { SearchFilter } from "./searchFilter";
import * as ForumService from "../../../service/forumService";

export default function ForumPage() {
  // The state for the forums
  const [forums, setForums] = useState<Forum[]>([]);
  // This state tracks the user comment inputs on the forum
  const [commentInputs, setCommentInputs] = useState<{ [key: number]: string }>({});
  // The search input and the current active query search
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  // The state for modal for pop up on the creating new form
  const [showModal, setShowModal] = useState(false);
  // This state tracks if the delete mode is active on the forums
  const [deleteMode, setDeleteMode] = useState<{ [key: number]: boolean }>({});
  // This state tracks which comments are selected on the forum to delete
  const [selectedComments, setSelectedComments] = useState<{ [key: number]: number[] }>({});

  // fetches the list of the forums in the backend and stores it in state to be displayed in the web page
  useEffect(() => {
    const fetchForums = async () => {
      try {
        const data = await ForumService.fetchForums();
        setForums(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchForums();
  }, []);

  // Handles when a forum is added to the backend and upates the new list including the new forum
  const handleAddForum = async (newForumData: Omit<Forum, "id">) => {
    try {
      const newForum = await ForumService.addForum(newForumData);
      setForums(prev => [...prev, newForum]);
    } catch (err) {
      console.error(err);
    }
  };
  
  // This sets the search query in the input
  const handleSearchSubmit = () => {
    setSearchQuery(searchInput);
  };

  // This filters  in the search which chechs anything that matches in the title, description and/or subject
  const filteredForums = forums.filter((forum) => {
    const query = searchQuery.toLowerCase();
    return (
      forum.title.toLowerCase().includes(query) ||
      forum.description.toLowerCase().includes(query) ||
      (forum.subject && forum.subject.toLowerCase().includes(query))
    );
  });

  // This updates the comment input on a forum
  const handleCommentChange = (forumId: number, value: string) => {
    setCommentInputs((previous) => ({ ...previous, [forumId]: value }));
  };

  // This adds a new comment onto forum
  const handleAddComment = (forumId: number) => {
    const text = commentInputs[forumId];

    if (!text.trim()) return;
    const newComment: Comment = {
      id: Date.now(), // Unique Id for the comment so each comment is its own
      text,
      user: "Guest", // I made this guest for now because were gonna add in back end logic later on the modules
    };
    setForums((previous) =>
      previous.map((forum) =>
        forum.id === forumId ? { ...forum, comments: [...(forum.comments || []), 
            newComment] }: forum)
    );

    setCommentInputs((previous) => ({ ...previous, [forumId]: "" }));
  };

  // This toggles the delemte mode on the forums
  const toggleDeleteMode = (forumId: number) => {
    setDeleteMode((previous) => ({ ...previous, [forumId]: !previous[forumId] }));
    setSelectedComments((previous) => ({ ...previous, [forumId]: [] }));
  };
  
  // This selects or unselect a comment that may be deleted
  const handleSelectedComments = (forumId: number, commentId: number) => {
    setSelectedComments((previous) => {
      const current = previous[forumId] || [];
      const updated = current.includes(commentId)
        ? current.filter((id) => id !== commentId)
        : [...current, commentId];
      return { ...previous, [forumId]: updated };
    });
  };

  // This deletes the selected comments for deleting
  const deleteSelectedComments = (forumId: number) => {
    const selected = selectedComments[forumId] || [];
    setForums((previous) =>
      previous.map((forum) =>
        forum.id === forumId
          ? {
              ...forum,
              comments: forum.comments?.filter(
                (comment) => !selected.includes(comment.id)
              ),
            }
          : forum
      )
    );
    setSelectedComments((previous) => ({ ...previous, [forumId]: [] }));
  };
return (
        <section className="forumPageContainer">
            <div className="forumSidebar">
                <div className="forumSearchBox">
                    <SearchFilter
                        searchFilter={searchInput}
                        handleSearchChange={setSearchInput}
                        handleSubmit={handleSearchSubmit}
                    />
                    <button
                        className="openModalButton"
                        onClick={() => setShowModal(true)}>Create a Forum Post</button>
                </div>
            </div> 
            <div className="forumContent">
                {filteredForums.map(forum => (
                    <div key={forum.id} className="forumPost">
                        <h3>{forum.title}</h3>
                        {forum.subject && <p className="subject">{forum.subject}</p>}
                        <p className="description">{forum.description}</p>
                        {forum.date && <p className="date">{forum.date}</p>}
                        <div className="commentsSection">
                            <div className="commentButtons">
                                <button onClick={() => toggleDeleteMode(forum.id)}>
                                    {deleteMode[forum.id] ? "Cancel Delete" : "Delete Comment"}
                                </button>
                                {deleteMode[forum.id] && (
                                    <button onClick={() => deleteSelectedComments(forum.id)}>Delete Selected</button>
                                )}
                            </div>
                            <h4>Replies</h4>
                            {forum.comments?.map(comment => (
                                <div key={comment.id} className="commentRow">
                                    {deleteMode[forum.id] && (
                                        <input
                                            type="checkbox"
                                            checked={selectedComments[forum.id]?.includes(comment.id) || false}
                                            onChange={() => handleSelectedComments(forum.id, comment.id)}
                                        />
                                    )}
                                    <p className="comment">
                                        <strong>{comment.user}:</strong> {comment.text}
                                    </p>
                                </div>
                            ))}

                            <div className="commentInputSection">
                                <textarea
                                    placeholder="Write a Comment..."
                                    value={commentInputs[forum.id] || ""}
                                    onChange={e => handleCommentChange(forum.id, e.target.value)}
                                    className="commentInput"
                                />
                                <button onClick={() => handleAddComment(forum.id)}>Add Comment</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showModal && (
                <div className="ModalBackground" onClick={() => setShowModal(false)}>
                    <div className="ModalForm" onClick={e => e.stopPropagation()}>
                        <button className="ModalClose" onClick={() => setShowModal(false)}>X</button>
                        <MakeForum
                          onAddForum={async (newForumData) => {
                            await handleAddForum({
                              subject: newForumData.subject ?? "No Subject",
                              title: newForumData.title ?? "Untitled Forum",
                              description: newForumData.description ?? "No description provided.",
                              date: new Date().toLocaleDateString(),
                            });

                            setShowModal(false);
                          }}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};