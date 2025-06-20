import React, { useContext, useEffect, useState, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Form from "./component/form/Form.jsx";
import Loader from "./Loader/Loader.jsx";
import Home from "./pages/Home/Home.jsx";
import RedirectToLastPage from "./component/currentPage/RedirectToLastPage.jsx";
import SaveLastPage from "./component/currentPage/SaveLastPage.jsx";
function App() {
  const ref = useRef(null);
  useEffect(() => {
    const mouse = (e) => {
      ref.current.style.top = e.clientY + "px";
      ref.current.style.left = e.clientX + "px";
    };

    document.addEventListener("mousemove", mouse);
    return () => {
      document.removeEventListener("mousemove", mouse);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={ref}></div>
      <SaveLastPage />
      <RedirectToLastPage />
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
