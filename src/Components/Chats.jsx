import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { db } from "../firebase.config";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) => (
        <div className="search-results" key={chat[0]}>
          <img
            className="profile"
            src={chat[1].userInfo.photoURL}
            alt="profile"
          />
          <div className="profile-content">
            <span>{chat[1].userInfo.displayName}</span>
            <span className="lastMessage">
              {chat[1].userInfo.lastMessage?.text}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
