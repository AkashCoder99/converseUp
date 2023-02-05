import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { db } from "../firebase.config";
import { query, collection, where, getDocs } from "firebase/firestore";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

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
        />
      </div>
      {err && (
        <span style={{ textAling: "center", color: "white" }}>
          User not found
        </span>
      )}
      {user && (
        <div className="search-results">
          <img className="profile" src={user.photoURL} alt="profile" />
          <span>{user.displayName}</span>
        </div>
      )}
    </div>
  );
};

export default Search;
