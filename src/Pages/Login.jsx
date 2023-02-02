import React from "react";
import shoe from "../Assets/shoe.svg";
import run from "../Assets/run.svg";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <p className="logo-text">
          Converse Up! <img src={shoe} className="logo" alt="logo" />
        </p>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="enter your email id" />
          <input type="password" placeholder="enter a password" />
          <button className="btn">
            Charge In!
            <img src={run} className="icon" alt="run" />
          </button>
          <button className="btn">
            Charge In using <GoogleIcon />
          </button>
        </form>
        <p className="login">
          don't have an account with us?
          <span style={{ color: "cyan", marginLeft: "5px" }}> register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
