import { createContext, useEffect, useState } from "react";

// Create the context
export const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {
  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState({
    name: "USD",
    symbol: "$",
  });

  const fetchAllCoins = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-LFgTgM1kqHUcpzp8ZjkWzyfu',
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&sparkline=true`,
        options
      );
      const data = await response.json();
      setAllCoins(data);
    } catch (err) {
      console.error("Error fetching coins:", err);
    }
  };

  useEffect(() => {
    fetchAllCoins();
  }, [currency]);

  const contextValue = {
    allCoins,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
