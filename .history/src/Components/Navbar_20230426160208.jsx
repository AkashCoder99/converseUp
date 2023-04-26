import React, { useContext } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <img className="profile" src={currentUser.photoURL} alt="profile" />
      <span className="selfname">{currentUser.displayName}</span>
      <LogoutIcon onClick={() => signOut(auth)} />
    </div>
  );
};

export default Navbar;
