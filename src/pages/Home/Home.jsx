import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";

function Home() {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoins);
  }, [allCoins]);

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Market Currency
        </h1>
        <p>
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
        <form>
          <input type="text" placeholder="Search crypto.." />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-layout table-header">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>

        {displayCoin.slice(0, 100).map((item, index) => (
  <div className="table-layout" key={item.id}>
    {/* Serial Number */}
    <p>{index + 1}</p>

    {/* Coin Info */}
    <div className="coin-info">
      <img src={item.image} alt={item.name} />
      <span className="name">{`${item.name} _ ${item.symbol.toUpperCase()}`}</span>
    </div>

    {/* Price */}
    <p>{currency.symbol}{item.current_price.toLocaleString()}</p>

    {/* 24H Change */}
    <p
      style={{
        color: item.price_change_percentage_24h >= 0 ? "green" : "red",
        textAlign: "center",
      }}
    >
      {item.price_change_percentage_24h?.toFixed(2)}%
    </p>

    {/* Market Cap */}
    <p className="market-cap">
      {currency.symbol}{item.market_cap.toLocaleString()}
    </p>
    
  </div>
))}


      </div>
    </div>
  );
}

export default Home;
