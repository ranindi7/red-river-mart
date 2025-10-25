import { useState } from "react";
import type { ForumPost } from "../../../types";
import type { Forum } from "../../../types";
import "./makeForumPage.css";

function MakeForum({ onAddForum }: ForumPost) {
  // This state stores the subject in the input value
  const [subject, setSubject] = useState("");
  // This stores the title in the input value
  const [title, setTitle] = useState("");
  // This stores the description input value
  const [description, setDescription] = useState("");

  // This handles the submission of the new form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // This creates a new forum object
    const newForum: Forum = {
      id: Date.now(),
      subject,
      title,
      description,
      date: new Date().toLocaleDateString(),
    };
    
    // This calls the  newForum function to add the forum on the list
    onAddForum(newForum);
    setSubject("");
    setTitle("");
    setDescription("");
  };

  return (
    <div className="makeForumPage">
      <h2>Create your Forum</h2>
      <form className="makeForumForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Create Forum</button>
      </form>
    </div>
  );
}

export default MakeForum;
