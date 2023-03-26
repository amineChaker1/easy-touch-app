import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Home = () => {
  return (
    <div className="grid-container">
      <header>
        <a href="/"> Easy Touch </a>
      </header>
      <main>Product List</main>
      <footer className="flex justify-evenly items-center">
        <a href="" className="text-white">
          Facebook
        </a>
        <a href="" className="text-white">
          Instagram
        </a>
        <a href="" className="text-white">
          Tiktok
        </a>
      </footer>
    </div>
  );
};

export default Home;
