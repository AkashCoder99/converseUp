import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  return (
    <div className="message owner">
      <div className="message-info">
        <img
          src="https://pbs.twimg.com/profile_images/1590363423011110912/x0jZMgC5_400x400.jpg"
          alt="profile"
        />
        <span>Just Now</span>
      </div>
      <div className="message-content">
        <p>Hello this is Punit & Welcome to my app</p>
        <img
          alt="sharedPhoto"
          src="https://pbs.twimg.com/profile_images/1590363423011110912/x0jZMgC5_400x400.jpg"
          className="shared-photo"
        />
      </div>
    </div>
  );
};

export default Message;
