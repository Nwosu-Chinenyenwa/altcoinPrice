import React, { useState } from "react";
import "./Welcome.css";
import logo from "./../assets/logo (1).png";
import side from "./../assets/banner-img.svg";
import Signup from "./form/signup";
import Signin from "./form/Login";

function Welcome() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="section">
      <img className="log img" src={logo} alt="Logo" />

      <div className="main1">
        <div className="main2">
          <h1> PLATFORM FOR CHECKING CRYPTO CURRENCY PRICES</h1>
          <p>
            Welcome to your trusted crypto companion. Monitor real-time prices,
            analyze charts, and make informed decisions — all in one place.
          </p>

          <button className="button"
          onClick={()=> setIsOpen(!isOpen)}
          >Get Started</button>
        </div>
        <div className="" style={{ display: isOpen? "block" : "none"}}>
          <Signup />
        </div>
        <div className="grid">
          <img className="bounce" src={side} alt="Crypto illustration" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;




