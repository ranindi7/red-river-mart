import type { ForumPost } from "../../../types";
import "./makeForumPage.css";
import { useFormInputs } from "../../../hooks/useFormInputs";
import { createForum } from "../../../apis/mockForumRepo";

function MakeForum({ onAddForum }: ForumPost) {
  // Uses the useFormInput custom hook that manages the field states 
  const { fields, handleChange } = useFormInputs({
    subject: "",
    title: "",
    description: "",
  });

  // This handles the submission of the new form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // This calls the createForum from forumRepo to create a new forum
    const newForum = createForum ({
      subject: fields.subject as string,
      title: fields.title as string,
      description: fields.description as string,
    });
    console.log(" Forum created:", newForum);
    
    // This calls the  newForum function to add the forum on the list
    onAddForum(newForum);
  };

  return (
    <div className="makeForumPage">
      <h2>Create your Forum</h2>
      <form className="makeForumForm" onSubmit={handleSubmit}>
        <input
          id="subject"
          type="text"
          placeholder="Subject"
          value={fields.subject as string}
          onChange={handleChange}
        />
        <input
          id="title"
          type="text"
          placeholder="Title"
          value={fields.title as string}
          onChange={handleChange}
        />
        <textarea
          id="description"
          placeholder="Description"
          value={fields.description as string}
          onChange={handleChange}
        />
        <button type="submit">Create Forum</button>
      </form>
    </div>
  );
}

export default MakeForum;
