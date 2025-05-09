import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Coin from "./pages/coin/Coin";

function App() {
  return (
    <>
    <div className="app">
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/coin/:coinID" element={<Coin />} />
      </Routes>
    </div> 
    </>);
}

export default App;

