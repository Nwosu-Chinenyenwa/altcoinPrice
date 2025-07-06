import React, { useState } from 'react'
import "./According.css"

  const AccordingItem = ({title, content}:{title:string, content:string}) => {
  const [view, setview] = useState(false)
  return(
    <>
    <div className='according'>
      <div className='accord' onClick={() => setview(prev => !prev)}>
        <h2>{title}</h2>
        <span>{view? "_":"+"}</span>
      </div>
         {
          view &&
          <p className='paragraph-content'>{content}</p>
        }
    </div>
    </>
  );
  }

 const Accordion = () => {
  const data = [
  {
    title: "What is AltcoinPrices?",
    content: "AltcoinPrices is a web-based platform designed to provide users with real-time market data, price charts, and historical insights on a wide range of altcoins. Whether you're tracking Ethereum, Solana, Cardano, or lesser-known emerging tokens, AltcoinPrices gives you everything you need to stay informed — all in one simple, fast, and secure dashboard built for both beginners and experienced crypto traders.",
  },
  {
    title: "How do you get the coin prices?",
    content: "We retrieve live cryptocurrency prices through reliable third-party APIs, aggregating data from hundreds of centralized and decentralized exchanges. This includes platforms like Binance, Coinbase, Kraken, PancakeSwap, and many more. Our backend updates the data in near real-time using Firebase, ensuring that what you see is as current as possible — no delays, no manual refresh required.",
  },
  {
    title: "Do I need an account to use AltcoinPrices?",
    content: "No — anyone can browse coin prices and charts without signing in. However, if you create a free account, you unlock extra features like saving favorite coins, accessing a personalized dashboard, and receiving future updates or alerts tailored to your watchlist. It's optional but gives you a much more powerful and customized experience.",
  },
  {
    title: "Is AltcoinPrices free to use?",
    content: "Yes, AltcoinPrices is 100% free to use. You can explore live prices, search coins, view charts, and track NFT or DeFi tokens at no cost. We believe crypto data should be accessible to everyone. While we plan to add optional premium features for power users in the future, the core tools will always remain free for all users.",
  },
  {
    title: "How often are prices updated?",
    content: "Prices on AltcoinPrices update in real time, typically every few seconds depending on the coin and data source. Thanks to our Firebase integration and optimized data streams, the platform ensures that you always get the most up-to-date pricing, volume, and market cap information — without needing to refresh your screen.",
  },
  {
    title: "Can I see charts and graphs for each altcoin?",
    content: "Yes! Every supported altcoin has a dedicated detail page that includes dynamic charts showing price changes over various timeframes — such as 1 hour, 24 hours, 7 days, or 30 days. You'll also see historical data, percentage change, trading volume, and more to help you make informed decisions about your crypto interests.",
  },
  {
    title: "How do I save or favorite a coin?",
    content: "When you're signed in, each coin has a star icon beside it. Clicking that star adds the token to your personalized watchlist. This makes it easy to quickly view and monitor your most important coins right from your dashboard, without having to search every time you visit the site.",
  },
  {
    title: "What is the difference between Bitcoin and Altcoins?",
    content: "Bitcoin is the first and most well-known cryptocurrency, often seen as digital gold. Altcoins are all the other cryptocurrencies that were developed after Bitcoin. These include Ethereum, Cardano, Solana, Avalanche, and thousands more. Many altcoins offer different technologies, utilities, and ecosystems that aim to solve problems Bitcoin doesn't address.",
  },
  {
    title: "Is it safe to use AltcoinPrices?",
    content: "Yes, AltcoinPrices is built with security in mind. We use trusted tools like Firebase Authentication and Clerk to handle login and account management. Your data is encrypted and never shared, and you don't need to connect a wallet or provide sensitive financial info to use the site. It's a read-only dashboard — meaning you can explore freely and safely.",
  },
  {
    title: "Can I use AltcoinPrices on mobile?",
    content: "Absolutely. AltcoinPrices is fully responsive and works seamlessly across all screen sizes — from desktop monitors to smartphones and tablets. You can check live prices, view your favorites, and explore charts from anywhere, at any time, with a smooth and mobile-friendly interface.",
  },
  {
    title: "Will you add more coins in the future?",
    content: "Yes! We're constantly updating our database with more tokens across various blockchains. As the crypto ecosystem grows, AltcoinPrices will expand to support new projects, emerging altcoins, trending memecoins, and DeFi tokens. You’ll soon be able to request or vote on coins you'd like to see added.",
  },
  {
    title: "Does AltcoinPrices offer news updates?",
    content: "We’re currently developing a dedicated crypto news section that will provide curated, real-time updates from trusted sources and social feeds. You'll be able to see news related to the coins you follow — including breaking developments, exchange listings, NFT announcements, and important market movements — right inside your dashboard.",
  },
];

  return (
 <div className='tion'>
  {
data.map((item, index) => (
<AccordingItem key={index} title={item.title}  content={item.content}/>
))
  }
 </div>
  )
}

export default Accordion;
