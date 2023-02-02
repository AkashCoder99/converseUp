import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Punit Bathija</span>
        <CloseIcon />
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
