import React from "react";
import Chat from "../Components/Chat";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  return (
    <>
      <p className="logo-text">
        Converse Up! <img src={shoe} className="logo" alt="logo" />
      </p>
      <div className="home">
        <div className="container">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </>
  );
};

export default Home;
