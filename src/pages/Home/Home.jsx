import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../component/form/Navbar/Navbar.jsx";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

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
        <Navbar />
        <section className="load">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
          <div className="loader">
            <span></span>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="hero">
          <h1>
            Largest <br /> Crypto Market Currency
          </h1>
          <p>
            Welcome to the world's largest cryptocurrency marketplace. Sign up
            to explore more about cryptos.
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              onChange={inputHandler}
              type="text"
              placeholder="Search crypto.."
              value={input}
            />
            <button type="submit">Search</button>
          </form>
        </div>

        <section>
          <div></div>
          <div className="middle">
            <form action=""></form>
            <div></div>
          </div>
        </section>

        <section className="crypto">
          <div className="crypto-table">
            <div className="table-layout table-header">
              <p className="active">#</p>
              <p>Coins</p>
              <p>Price</p>
              <p style={{ textAlign: "center" }}>24H Change</p>
              <p className="market-cap">Market Cap</p>
            </div>

            {displayCoin.slice(0, 50).map((item, index) => (
              <div className="table-layout" key={item.id}>
                <p>
                  <i className="ri-star-line"></i>
                </p>
                <div className="coin-info">
                  <p>{index + 1}</p>
                  <img src={item.image} alt={item.name} />
                  <span className="name">{`${
                    item.name
                  } _ ${item.symbol.toUpperCase()}`}</span>
                </div>
                <p>
                  {currency.symbol}
                  {item.current_price.toLocaleString()}
                </p>
                <p
                  style={{
                    color:
                      item.price_change_percentage_24h >= 0 ? "green" : "red",
                    textAlign: "center",
                  }}
                >
                  {item.price_change_percentage_24h?.toFixed(2)}%
                </p>
                <p className="market-cap">
                  {currency.symbol}
                  {item.market_cap.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
