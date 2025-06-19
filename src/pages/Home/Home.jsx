import React, { useContext, useEffect, useRef, useState } from "react";
import "./Home.css";
import logo from "../../assets/logo (1).png";
import profile from "../../assets/default-avatar.png";
import { CoinContext } from "../../context/CoinContext";
import { useNavigate } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { Link, Outlet } from "react-router-dom";
import SignUp from "../../component/form/signup";

export default function Home() {
  const [link, setlink] = useState(true);
  const [use, setuse] = useState(true);
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");
  const { setCurrency } = useContext(CoinContext);
  const [user, setUser] = useState(null);

  const handleClear = () => {
    setInput("");
  };

  /*   logout */
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  /*   user id */
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  /*  currency */
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

  /*   const navigate = useNavigate(); */

  const inputHandler = (event) => {
    const value = event.target.value;
    setInput(value);
    const filteredCoins = allCoins.filter((coin) =>
      coin.name.toLowerCase().includes(value.toLowerCase())
    );
    setDisplayCoin(value ? filteredCoins : allCoins);
  };

  useEffect(() => {
    setDisplayCoin(allCoins);
  }, [allCoins]);

  if (!allCoins || allCoins.length === 0) {
    return (
      <>
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
      </>
    );
  }
  return (
    <>
      <header>
        {link && (
          <div className="first">
            <a href="https://www.coingecko.com/">
              🚀Join coin gecko today to see more daily price changes🚀
            </a>
            <svg
              onClick={() => setlink((prev) => !prev)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
            </svg>
          </div>
        )}

        <nav>
          <img className="lo" src={logo} alt="" />
          <ul>
            <form class="form">
              <label for="search">
                <input
                  type="text "
                  onChange={inputHandler}
                  value={input}
                  className="input"
                  id="search"
                  placeholder="Search"
                />
                <div class="fancy-bg"></div>
                <div class="search">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"
                  >
                    <g>
                      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                  </svg>
                </div>
                <button onClick={handleClear} class="close-btn" type="reset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </label>
            </form>

            <Link to="/welcome">
              <button class="Btn">
                <div class="sign">
                  <svg viewBox="0 0 512 512">
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                  </svg>
                </div>
                <div class="text">Logout</div>
              </button>
            </Link>

            <div onClick={() => setuse((prev) => !prev)} className="profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
              </svg>
              <img src={profile} alt="" />
            </div>
          </ul>
        </nav>
        {use && (
          <div class="card-client">
            <div class="user-picture">
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
              </svg>
            </div>
            <p class="name-client">
              {" "}
            <h5>USER:</h5>
              <span>{user?.email}</span>
            </p>
            <hr />
            <div class="social-media">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
                <span class="tooltip-social">Twitter</span>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
                <span class="tooltip-social">Instagram</span>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
                <span class="tooltip-social">Facebook</span>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
                <span class="tooltip-social">LinkedIn</span>
              </a>
            </div>
          </div>
        )}
      </header>
      <main className="market-main">
        <div className="coins">
          <div className="table-layout table-header">
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p>24H Change</p>
            <p>Market Cap</p>
            <p>MC Change%</p>
            <p>Volume</p>
            <p>Supply</p>
            <p>7D Chart</p>
          </div>

          {displayCoin.slice(0, 100).map((item, index) => (
            <div className="table-layout coin-row" key={item.id}>
              <p>{index + 1}</p>
              <div className="coin-info">
                <img src={item.image} alt={item.name} className="coin-img" />
                <span className="name">
                  {item.name} <small>({item.symbol.toUpperCase()})</small>
                </span>
              </div>
              <p>
                {currency.symbol}
                {item.current_price.toLocaleString()}
              </p>
              <p
                className={`change ${
                  item.price_change_percentage_24h >= 0 ? "green" : "red"
                }`}
              >
                {item.price_change_percentage_24h?.toFixed(2)}%
              </p>
              <p>
                {currency.symbol}
                {item.market_cap.toLocaleString()}
              </p>
              <p
                className={`change ${
                  item.market_cap_change_percentage_24h >= 0 ? "green" : "red"
                }`}
              >
                {item.market_cap_change_percentage_24h?.toFixed(2)}%
              </p>
              <p>
                {currency.symbol}
                {item.total_volume.toLocaleString()}
              </p>
              <p>{item.circulating_supply.toLocaleString()}</p>
              <div className="sparkline">
                {item?.sparkline_in_7d?.price?.length > 0 ? (
                  <Sparklines
                    className="sparkline"
                    data={item.sparkline_in_7d.price}
                  >
                    <SparklinesLine
                      style={{
                        stroke:
                          item.price_change_percentage_24h >= 0
                            ? "#4ade80"
                            : "#f87171",
                        fill: "none",
                        strokeWidth: 2,
                      }}
                    />
                  </Sparklines>
                ) : (
                  <p className="no-chart">Loading...</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="modern-footer">
        <div className="modern-footer__content">
          <p>
            © {new Date().getFullYear()} <span>AltcoinPrices</span>. All Rights
            Reserved.
          </p>
          <p>Reproduction or distribution without permission is prohibited.</p>
          <p className="disclaimer">
            AltcoinPrices provides data for informational purposes only. Always
            DYOR (Do Your Own Research).
          </p>
          <p className="powered">
            Powered by{" "}
            <a
              href="https://www.coingecko.com/en/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              CoinGecko API
            </a>
          </p>
        </div>
      </footer>
      <Outlet />
    </>
  );
}
