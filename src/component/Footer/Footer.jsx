import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
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
  )
}
