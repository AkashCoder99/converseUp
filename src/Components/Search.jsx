import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { db } from "../firebase.config";
import { query, collection, where, getDocs } from "firebase/firestore";
import ErrorIcon from "@mui/icons-material/Error";

const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const q = query(
        collection(db, "users"),
        where("displayName", "==", userName)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      setErr(true);
      {
        err && (
          <span style={{ color: "black", textAlign: "center" }}>
            <ErrorIcon color="error" />
            Something went wrong...
          </span>
        );
      }
    }
  };

  return (
    <div className="search">
      <form className="search-form">
        <SearchIcon color="action" />
        <input
          type="text"
          placeholder="search for a user"
          onChange={(e) => setUserName(e.target.value)}
          onSubmit={handleSearch}
        />
      </form>
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
