import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { db } from "../firebase.config";
import {
  query,
  collection,
  where,
  getDocs,
  getDoc,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { AuthContext } from "../Context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const userRef = await getDoc(doc(db, "chats", combinedId));
      if (!userRef.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
      setUsername("");
      setUser(null);
    } catch (err) {
      setErr();
    }
  };

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className="search">
      <div className="search-form">
        <SearchIcon color="action" />
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="search for a user"
          onKeyDown={handleKey}
          value={username}
        />
      </div>
      {err && (
        <span style={{ textAling: "center", color: "white" }}>
          User not found!
        </span>
      )}
      {user && (
        <div className="search-results" onClick={handleSelect}>
          <img className="profile" src={user.photoURL} alt="profile" />
          <span>{user.displayName}</span>
        </div>
      )}
    </div>
  );
};

export default Search;
