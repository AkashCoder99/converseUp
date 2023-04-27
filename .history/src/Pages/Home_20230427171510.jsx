import React from "react";
import Chat from "../Components/Chat";
import Sidebar from "../Components/Sidebar";
import shoe from "../Assets/shoe.svg";

const Home = () => {
  return (
    <div className="home">
      <p className="logo-text">
        Converse Up! <img src={shoe} className="logo" alt="logo" />
      </p>
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
