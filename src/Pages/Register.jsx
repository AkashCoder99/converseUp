import React from "react";
import shoe from "../Assets/shoe.svg";
import lace from "../Assets/lace.svg";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import GoogleIcon from "@mui/icons-material/Google";

const Register = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <p className="logo-text">
          Converse Up! <img src={shoe} className="logo" alt="logo" />
        </p>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="enter your display name" />
          <input type="email" placeholder="enter your email id" />
          <input type="password" placeholder="enter a password" />
          <label htmlFor="file-picker" className="file">
            <CloudUploadIcon color="action" fontSize="large" />
            upload a display
          </label>
          <input type="file" style={{ display: "none" }} id="file-picker" />
          <button className="btn">
            Knot Up!
            <img src={lace} className="icon" alt="lace" />
          </button>
          <button className="btn">
            Knot Up using <GoogleIcon />
          </button>
        </form>
        <p className="login">
          have an account with us?
          <span style={{ color: "cyan", marginLeft: "5px" }}> login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
