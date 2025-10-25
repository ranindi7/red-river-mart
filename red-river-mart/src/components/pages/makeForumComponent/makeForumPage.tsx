import type { ForumPost } from "../../../types";
import type { Forum } from "../../../types";
import "./makeForumPage.css";
import { useFormInputs } from "../../../hooks/useFormInputs";

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

    // This creates a new forum object
    const newForum: Forum = {
      id: Date.now(),
      subject: fields.subject as string,
      title: fields.title as string,
      description: fields.description as string,
      date: new Date().toLocaleDateString(),
    };
    
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
