import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../Context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
    {if(data)
    return(
      <div>
        <img className="profile" src={data.user?.photoURL}></img>
        <span>{data.user?.displayName}</span>
        </div>):
        return(<p>Please select or add a user</p>)
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
