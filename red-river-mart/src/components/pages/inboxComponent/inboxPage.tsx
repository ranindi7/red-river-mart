import "./inboxPage.css";
import type { Message } from "../../../types";
import type { messageRequest } from "../../../types";
import { useState } from "react";
import messagesData from "../../../jsonData/messageData.json";
import requestData from "../../../jsonData/requestData.json";

const message = () => {
  const [messages, setMessage] = useState<Message[]>(messagesData);
  const [requests, setRequest] = useState<messageRequest[]>(requestData);

  const removeMessage = (id:number) => {
    setMessage(messages.filter(msg => msg.id !== id));
  };

  const [selectedReq, setSelectedReq] = useState<number[]>([]);

  const checkSelectedReq = (id: number) => {
    if (selectedReq.includes(id)) {
      setSelectedReq(selectedReq.filter((reqId) => reqId !== id));

    } else {
      setSelectedReq([...selectedReq, id]);
    }
  };

  const acceptSelectedReq = () => {
    const accept = requests.filter((req) =>
    selectedReq.includes(req.id))

    setMessage([...messages, ...accept]);
    setRequest(requests.filter((req) => !selectedReq.includes(req.id)));
  };

  const declineSelectedReq = () => {
    setRequest(requests.filter((req) => !selectedReq.includes(req.id)));
  };


  return (
    <section className="messageContainer">
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
      <div className="messageList">
        <h2>Messages</h2>
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
      <div className="requestList">
        <h2>Message Requests</h2>
      <ul>
          {requests.map((req) => (
            <li key={req.id}>
              <input
                type="checkbox"
                checked={selectedReq.includes(req.id)}
                onChange={() => checkSelectedReq(req.id)}
              />
              <p>{req.user}: {req.text}</p>
            </li>
          ))}
        </ul>
      <div className="requestButtons">
      </div>
      <button onClick={acceptSelectedReq}>Accept</button>
      <button onClick={declineSelectedReq}>Decline</button>
      </div>
    </section>
  );
};

export default message;
