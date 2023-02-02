import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        className="profile"
        src="https://pbs.twimg.com/profile_images/1590363423011110912/x0jZMgC5_400x400.jpg"
        alt="profile"
      />
      <span>Punit Bathija</span>
      <LogoutIcon />
    </div>
  );
};

export default Navbar;
