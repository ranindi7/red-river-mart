import "./editUserDetailsComponent.css"
import { useFormInputs } from "../../../hooks/useFormInputs";
import type { User, EditUser } from "../../../../../../shared/types/types";


export default function EditUserModal({ user, onSave }: EditUser) {
  const { fields, errors, handleChange, validate } = useFormInputs({
    bio: user.bio || "",
    email: user.email || "",
    phone: user.phone || "",
    preferredContact: user.preferredContact || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!validate())
        return;

    const updatedUser: Omit<User, 'id'> = {
        userName: user.userName,
        bio: fields.bio as string,
        email: fields.email as string,
        phone: fields.phone as string,
        preferredContact: fields.preferredContact as string,
    };

    onSave(updatedUser)
  }

  return (
   <div className="editUserModal">
      <form onSubmit={handleSubmit}>
        <h2>Edit Your Profile</h2>
        <div>
          <label>Username:</label>
          <p>{user.userName}</p>
        </div>

        <div>
          <label>Bio:</label>
          <textarea id="bio" value={fields.bio as string} onChange={handleChange} />
          {errors.bio && <p className="error">{errors.bio}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input id="email" value={fields.email as string} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label>Phone:</label>
          <input id="phone" value={fields.phone as string} onChange={handleChange} />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div>
          <label>Preferred Contact:</label>
          <input
            id="preferredContact"
            value={fields.preferredContact as string}
            onChange={handleChange}
          />
          {errors.preferredContact && <p className="error">{errors.preferredContact}</p>}
        </div>

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}