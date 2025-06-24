import React from "react";
import CoinContextProvider from "../context/CoinContext";
import CookieConsent from "../cookieConsent/CookieConsent";
import Cookies from "js-cookie";
import Logo from "../../assets/logo (1).png";
import "./LangingPage.css";
import HeroImg from "../../assets/undraw_crypto-portfolio_cat6.svg";

function LandingPage() {
  const removeCookie = () => {
    Cookies.remove("DisplayCookies");
    window.location.reload();
  };
  return (
    <>
      <main className="page">
        <CoinContextProvider />
        <CookieConsent />
        <div className="header">
          <div className="link">
            <img src={Logo} alt="" />
            <div className="trade">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>DashBoard</li>
                <li>Coins</li>
              </ul>
              <button class="Btn" onClick={removeCookie}>
                <div class="text">Reset Cookies</div>
              </button>
            </div>
          </div>

          <div className="responsiveHeader">
            <img src={Logo} alt="logo" />
            <div className="ham"></div>
          </div>
        </div>

        <section className="landing">
          <div className="landing1">
            <h1>Real Time Altcoin Prices at Your Fingertips</h1>
            <p>
              The crypto market never sleeps, and neither should your data. At
              NcManus Altcoin Tracker, we bring you accurate, real-time prices,
              trends, and performance analytics for hundreds of cryptocurrencies
              all in one clean, fast dashboard.
            </p>
            <div>
              <button>Let's Trade</button>
              <button>View coins</button>
            </div>
          </div>
          <div className="landing2">
            <img src={HeroImg} alt="" width="500vw" />
          </div>
        </section>
      </main>
    </>
  );
}

export default LandingPage;
