import React from "react";
import Chat from "../Components/Chat";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
      <h1>Coverse Up</h1>

);
};

export default Home;
