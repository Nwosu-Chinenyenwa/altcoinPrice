import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrowIcon from "../../assets/arrow_icon.png";
import Bg from "../../assets/data-bg.png";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";

function Navbar() {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = async (e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({
          name: "USD",
          symbol: "$",
        });
        break;
      case "eur":
        setCurrency({
          name: "EUR",
          symbol: "€",
        });
        break;
      case "inr":
        setCurrency({
          name: "INR",
          symbol: "₹",
        });
        break;

      default: {
        setCurrency({
          name: "USD",
          symbol: "$",
        });
      }
    }
  };

  return (
    <>
      <section id="Nav">
        <div className="navBar">
          <a href="#">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            adipisci architecto iusto voluptate placeat debitis quaerat
            exercitationem.
          </a>
        </div>
        <div className="Nav">
          <h3 className="logo">
            ///COIN.<span>CAP</span>
          </h3>

          <span>
              <select onChange={currencyHandler} name="currency" id="currency">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
              </select>
            </span>
          <ul>
            <li>
              <a href="">
                <span className="icon">
                  <i class="ri-home-4-line"></i>
                </span>
                <span className="title">Home</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <i class="ri-bell-line"></i>
                </span>
                <span className="title">Features</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <i class="ri-price-tag-3-fill"></i>
                </span>
                <span className="title">Pricing</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <i class="ri-blogger-fill"></i>
                </span>
                <span className="title">Blog</span>
              </a>
            </li>

            <li>
              <a href="">
                <span className="icon">
                  <i class="ri-lock-2-fill"></i>
                </span>
                <span className="title">Password</span>
              </a>
            </li>

            <li>
              <a href="">
                <span className="icon">
                  <i class="ri-login-box-line"></i>
                </span>
                <span className="title">Sign in</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Navbar;
