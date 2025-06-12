import React from "react";
import "./Navbar.css";
import logo from "../../../assets/logo (1).png";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { CoinContext } from "../../../context/CoinContext";

function Navbar() {
  const { setCurrency } = useContext(CoinContext);


  const currencyHandler = async (e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({ name: "USD", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "EUR", symbol: "€" });
        break;
      case "inr":
        setCurrency({ name: "INR", symbol: "₹" });
        break;
      case "gbp":
        setCurrency({ name: "GBP", symbol: "£" });
        break;
      case "jpy":
        setCurrency({ name: "JPY", symbol: "¥" });
        break;
      case "cad":
        setCurrency({ name: "CAD", symbol: "CA$" });
        break;
      case "aud":
        setCurrency({ name: "AUD", symbol: "A$" });
        break;
      case "cny":
        setCurrency({ name: "CNY", symbol: "¥" });
        break;
      case "zar":
        setCurrency({ name: "ZAR", symbol: "R" });
        break;
      case "ngn":
        setCurrency({ name: "NGN", symbol: "₦" });
        break;
      default:
        setCurrency({ name: "USD", symbol: "$" });
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <>
      <header>
        <nav>
          <a href="https://www.coingecko.com/">Join coin gecko today to see more dayly price changes</a>
        </nav>
        <div className="logo">
          <img  src={logo} alt="" />

          <div className="">
            <select
              id="currency"
              onChange={currencyHandler}
              value={currencyHandler.name}
            >
              <option value="usd">USD ($)</option>
              <option value="eur">EUR (€)</option>
              <option value="inr">INR (₹)</option>
              <option value="gbp">GBP (£)</option>
              <option value="jpy">JPY (¥)</option>
              <option value="cad">CAD (CA$)</option>
              <option value="aud">AUD (A$)</option>
              <option value="cny">CNY (¥)</option>
              <option value="zar">ZAR (R)</option>
              <option value="ngn">NGN (₦)</option>
            </select>
             <button className="nav-button" onClick={handleLogout}>Log Out</button>
          </div>
        </div>

      </header>
    </>
  );
}

export default Navbar;
