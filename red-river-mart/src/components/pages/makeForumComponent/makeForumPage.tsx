import type { ForumPost } from "../../../types";
import type { Forum } from "../../../types";
import "./makeForumPage.css";
import { useFormInputs } from "../../../hooks/useFormInputs";

function MakeForum({ onAddForum }: ForumPost) {
  // useFormInputs manages form state and validation
  const { fields, handleChange, errors, validate } = useFormInputs({
    subject: "",
    title: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // runs the validateForm and returns true if there are no errors, stops the form submission if the field validaiton fails
    if (!validate()) {
      return; 
    }

    // create a new forum object
    const newForum: Forum = {
      id: Date.now(),
      subject: fields.subject as string,
      title: fields.title as string,
      description: fields.description as string,
      date: new Date().toLocaleDateString(),
    };

    // add the new forum to the list
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
        {errors.subject && <p className="error">{errors.subject}</p>}

        <input
          id="title"
          type="text"
          placeholder="Title"
          value={fields.title as string}
          onChange={handleChange}
        />
        {errors.title && <p className="error">{errors.title}</p>}

        <textarea
          id="description"
          placeholder="Description"
          value={fields.description as string}
          onChange={handleChange}
        />
        {errors.description && <p className="error">{errors.description}</p>}

        <button type="submit">Create Forum</button>
      </form>
    </div>
  );
}

export default MakeForum;