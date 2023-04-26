import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../Context/AuthContext";
// import { ChatContext } from "../Context/ChatContext";
import moment from "moment/moment";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext);

  let date = message.date.toDate();

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="message-info">
        {/* <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt="profile"
        /> */}
      </div>
      <div className="message-content">
        <p>{message.text}</p>
        {message.img && (
          <img alt="sharedPhoto" src={message.img} className="shared-photo" />
        )}
        <hr />
        <span className="date">{moment(date).format("ddd, hh:mm")}</span>
      </div>
    </div>
  );
};

export default Message;
