import React, { useContext, useEffect, useState, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Form from "./component/form/Form.jsx";
import Loader from "./component/Loader/Loader.jsx";
import Home from "./component/Home/Home.jsx";
/* import RedirectToLastPage from "./component/currentPage/RedirectToLastPage.jsx";
import SaveLastPage from "./component/currentPage/SaveLastPage.jsx"; */
import LandingPage from "./component/LandingPage/LandingPage.jsx";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function App() {
  const ref = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

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

  useEffect(() => {
    localStorage.setItem("lastpage", location.pathname);
  }, [location]);

  useEffect(() => {
    const lastpage = localStorage.getItem("lastvisitedpage");
    if (lastpage && lastpage !== window.location.pathname) {
      navigate(lastpage, { replace: true });
    }
  }, []);

  return (
    <>
      <div className="cursor" ref={ref}></div>
     {/*  <SaveLastPage />
      <RedirectToLastPage /> */}
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
