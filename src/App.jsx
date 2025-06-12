import React, { useContext, useEffect, useState, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./component/form/Login.jsx";
import SignUp from "./component/form/signup.jsx";
import Welcome from "./component/Welcome.jsx";
import Home from "../src/pages/Home/Home.jsx";
import Loader from "./Loader/Loader.jsx";

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.pageY}px`;
        cursorRef.current.style.left = `${e.pageX}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
