import React from "react";
import Chat from "../Components/Chat";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <h1>This is my home component</h1>
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Home;
