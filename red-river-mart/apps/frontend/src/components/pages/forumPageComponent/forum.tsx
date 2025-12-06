import "./forumPage.css";
import { useEffect, useState } from "react";
import type { Forum } from "../../../../../../shared/types/types";
import MakeForum from "../makeForumComponent/makeForumPage";
import { SearchFilter } from "./searchFilter";
import * as ForumService from "../../../apis/forumRepo";
import { getCurrentUser } from "../../../hooks/getCurrentUser";
import CommentsComponent from "./commentsComponent";

export default function ForumPage() {
  // The state for the forums
  const [forums, setForums] = useState<Forum[]>([]);
  // The search input and the current active query search
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  // The state for modal for pop up on the creating new form
  const [showModal, setShowModal] = useState(false);
  
  const { dbUser, isSignedIn, getToken } = getCurrentUser();

  // fetches the list of the forums in the backend and stores it in state to be displayed in the web page
  useEffect(() => {
    const fetchForums = async () => {
      const token = await getToken();
      if (!token) return;
      const fetchedForums = await ForumService.fetchForums(token);
      setForums(fetchedForums);
    };
    fetchForums();
  }, [dbUser]);

  if (!isSignedIn) return <p>Please sign in to view the Forum.</p>;
  if (!dbUser) return <p>Loading Forum...</p>;

  // Handles when a forum is added to the backend and upates the new list including the new forum
  const handleAddForum = async (newForumData: Omit<Forum, "id">) => {
    const token = await getToken();
    if (!token) {
      alert("Could not authenticate request.");
      return;
    }
    try {
      const newForum = await ForumService.addForum(newForumData, token);
      setForums((prev) => [...prev, newForum]);
    } catch (err) {
      console.error(err);
    }
  };

  // This sets the search query in the input
  const handleSearchSubmit = () => {
    setSearchQuery(searchInput);
  };

  // This filters in the search which checks anything that matches in the title, description and/or subject
  const filteredForums = forums.filter((forum) => {
    const query = searchQuery.toLowerCase();
    return (
      forum.title.toLowerCase().includes(query) ||
      forum.description.toLowerCase().includes(query) ||
      (forum.subject && forum.subject.toLowerCase().includes(query))
    );
  });

  const handleResetSearchSubmit = () => {
    setSearchInput("");
    setSearchQuery("");
  };

  return (
    <section className="forumPageContainer">
      <div className="forumSidebar">
        <div className="forumSearchBox">
          <SearchFilter
            searchFilter={searchInput}
            handleSearchChange={setSearchInput}
            handleSubmit={handleSearchSubmit}
            handleReset={handleResetSearchSubmit}
          />
          <button
            className="openModalButton"
            onClick={() => setShowModal(true)}
          >
            Create a Forum Post
          </button>
        </div>
      </div>

      <div className="forumContent">
        {filteredForums.map((forum) => (
          <div key={forum.id} className="forumPost">
            <h3>{forum.title}</h3>
            {forum.subject && <p className="subject">{forum.subject}</p>}
            <p className="subject">Posted by: {forum.author?.firstName ?? "Unknown"} {forum.author?.lastName ?? ""}</p>
            <p className="description">{forum.description}</p>
            {forum.date && <p className="date">{forum.date}</p>}

            <CommentsComponent
              forumId={forum.id}
              initialComments={forum.comments || []}
            />
          </div>
        ))}
      </div>

      {showModal && (
        <div
          className="ModalBackground"
          onClick={() => setShowModal(false)}
        >
          <div className="ModalForm" onClick={(e) => e.stopPropagation()}>
            <button
              className="ModalClose"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            <MakeForum
              onAddForum={async (newForumData) => {
                await handleAddForum({
                  subject: newForumData.subject ?? "No Subject",
                  title: newForumData.title ?? "Untitled Forum",
                  description:
                    newForumData.description ?? "No description provided.",
                  date: new Date().toLocaleDateString(),
                  authorId: dbUser.id,
                });
                setShowModal(false);
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
