import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Context } from "./context";

const Home = () => {
  const context = useContext(Context);
  return (
    <main>
      <button 
        className="sidebar-toggle"
        onClick={context.handleShowSidebar}
      >
        <FaBars />
      </button>
      <button 
        className="btn"
        onClick={context.handleShowModal}
      >
        Show Modal
      </button>
    </main>
  );
};

export default Home;
