import "./inboxPage.css";
import type { Message } from "../../../types";

const Inbox = () => {
  const messages: Message[] = [
    { id: 1, user: "Aleca", text: "Is this available?" },
    { id: 2, user: "Bayle", text: "Would you take $10?" },
    { id: 3, user: "Riven", text: "What is the pick up address?" },
    { id: 4, user: "Zed", text: "I am outside to pick up your item" },
    { id: 5, user: "George", text: "Yo do you want to trade instead?" },
    { id: 6, user: "Rengar", text: "I will have to pass sorry." }
  ];

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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Inbox;
