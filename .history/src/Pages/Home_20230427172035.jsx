import React from "react";
import Chat from "../Components/Chat";
import Sidebar from "../Components/Sidebar";
import shoe from "../Assets/shoe.svg";

const Home = () => {
  return (
    <div className="wrap">
      <p className="logo-text">
        Converse Up! <img src={shoe} className="logo" alt="logo" />
      </p>
      <div className="home">
        <div className="container">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Home;
