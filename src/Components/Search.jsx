import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="search">
      <form className="search-form">
        <SearchIcon color="action" />
        | <input type="text" placeholder="search for a user" />
      </form>
      <div className="search-results">
        <img
          className="profile"
          src="https://pbs.twimg.com/profile_images/1590363423011110912/x0jZMgC5_400x400.jpg"
          alt="profile"
        />
        <span>Punit Bathija</span>
      </div>
    </div>
  );
};

export default Search;
