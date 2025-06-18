import React, { useContext, useEffect, useState, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./component/form/Login.jsx";
import SignUp from "./component/form/signup.jsx";
import Welcome from "./component/Welcome.jsx";
import Loader from "./Loader/Loader.jsx";
import Home from "./pages/Home/Home.jsx";
import Seo from "./component/SEO/Seo.jsx";
function App() {
  const ref = useRef(null);
  useEffect(() => {
    const mouse = (e) => {
      ref.current.style.top = `${e.pageY}px`;
      ref.current.style.left = `${e.pageX}px`;
    };

    document.addEventListener("mousemove", mouse);

    return () => {
      document.addEventListener("mousemove", mouse);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={ref}></div>
      <Seo />
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
