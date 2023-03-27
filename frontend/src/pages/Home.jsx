import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="grid-container">
      <header className="text-center font-bold text-4xl pt-2 ">
        <Header />
      </header>
      <main className="py-16 px-8 bg-black">
        <ProductList />
      </main>
      <footer className="flex justify-evenly items-center ">
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
