import React, { useState } from "react";
import shoe from "../Assets/shoe.svg";
import run from "../Assets/run.svg";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(err);
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <p className="logo-text">
          Converse Up! <img src={shoe} className="logo" alt="logo" />
        </p>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="enter your email id" />
          <input type="password" placeholder="enter a password" />
          <button className="btn">
            Charge In!
            <img src={run} className="icon" alt="run" />
          </button>

          <button className="btn">
            Charge In using <GoogleIcon />
          </button>
          {err && <span>Something went wrong!</span>}
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
