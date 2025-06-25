import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Loader.css";

export default function Loader() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");

    if (hasSeenLoader) {
      navigate("/landingPage");
    } else {
      const timer = setTimeout(() => {
        sessionStorage.setItem("hasSeenLoader", "true");
        navigate("/landingPage");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [navigate]);

  const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");
  if (hasSeenLoader) return null;

  return (
    <section className="load">
      <div id="wifi-loader">
        <svg class="circle-outer" viewBox="0 0 86 86">
          <circle class="back" cx="43" cy="43" r="40"></circle>
          <circle class="front" cx="43" cy="43" r="40"></circle>
          <circle class="new" cx="43" cy="43" r="40"></circle>
        </svg>
        <svg class="circle-middle" viewBox="0 0 60 60">
          <circle class="back" cx="30" cy="30" r="27"></circle>
          <circle class="front" cx="30" cy="30" r="27"></circle>
        </svg>
        <svg class="circle-inner" viewBox="0 0 34 34">
          <circle class="back" cx="17" cy="17" r="14"></circle>
          <circle class="front" cx="17" cy="17" r="14"></circle>
        </svg>
        <div class="text" data-text="Loading"></div>
      </div>
    </section>
  );
}
