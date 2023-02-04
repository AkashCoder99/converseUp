import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        className="profile"
        src="https://pbs.twimg.com/profile_images/1590363423011110912/x0jZMgC5_400x400.jpg"
        alt="profile"
      />
      <span>Punit Bathija</span>
      <LogoutIcon onClick={() => signOut(auth)} />
    </div>
  );
};

export default Navbar;
