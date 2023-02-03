import React, { useState } from "react";
import shoe from "../Assets/shoe.svg";
import lace from "../Assets/lace.svg";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import GoogleIcon from "@mui/icons-material/Google";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
          } catch (err) {
            console.log(err);
            setErr(true);
          }
        });
        console.log(res.user);
      });
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <p className="logo-text">
          Converse Up! <img src={shoe} className="logo" alt="logo" />
        </p>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
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
          {err && <span>Something went wrong...</span>}
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
