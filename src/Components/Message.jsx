import React from "react";

const Message = () => {
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
