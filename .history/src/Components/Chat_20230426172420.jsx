import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../Context/ChatContext";
const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
       { if(data ?
        <div>
          <img
            className="profile"
            src={data.user?.photoURL}
            alt="user-profile"
          />
          <span>{data.user?.displayName}</span>
        </div>{" "}
        : <p>Please select a user or add user</p>)}
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
