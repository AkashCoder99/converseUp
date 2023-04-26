import React, { useContext, useState } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../Context/ChatContext";
const Chat = () => {
  const { data } = useContext(ChatContext);
  const [error, setError] = useState("");
  setError("Please add a user or choose a user");
  return (
    <div className="chat">
      <div className="chatInfo">
        {data && (
          <img
            className="profile"
            src={data.user?.photoURL}
            alt="user-profile"
          />
        )}
        {data && <span>{data.user?.displayName}</span>}
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
