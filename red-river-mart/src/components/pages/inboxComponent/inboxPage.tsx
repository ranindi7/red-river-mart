import "./inboxPage.css";
import type { Message } from "../../../types";
import { useState } from "react";
import messagesData from "../../../jsonData/messageData.json";

const Inbox = () => {
  const [messages, setMessage] = useState<Message[]>(messagesData);

  const removeMessage = (id:Number) => {
    setMessage(messages.filter(msg => msg.id !== id));
  };


  return (
    <section className="inboxContainer">
      <div className="conversation">
        <h2>Conversation</h2>
        <div className="messagesContent">
          <p>Start a conversation.</p>
        </div>
        <div className="messageInput">
          <input type="text" placeholder="Message" />
          <button>Send</button>
        </div>
      </div>
      <div className="inboxList">
        <h2>Inbox</h2>
        <ul>
          {messages.map((msg) => (
            <li key={msg.id}>
              <div className="messageBox">
                <p>{msg.user}: {msg.text}</p>
              </div>
              <button onClick={() => removeMessage(msg.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Inbox;
