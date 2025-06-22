import React from "react";
import CoinContextProvider from "../context/CoinContext";
import CookieConsent from "../cookieConsent/CookieConsent";
import Cookies from "js-cookie";

function LandingPage() {
    const removeCookie = () =>{
      Cookies.remove("DisplayCookies");
      window.location.reload();
    }
  return (
    <>
      <div>LandingPage</div>
      <CoinContextProvider/>
      <CookieConsent/>
      <button onClick={removeCookie}>reset cookies</button>
    </>
  );
}

export default LandingPage;
