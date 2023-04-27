import React from "react";
import Chat from "../Components/Chat";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <h1>Coverse Up</h1>
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
