import React from "react";
import CoinContextProvider from "../context/CoinContext";
/* import CookieConsent from "../cookieConsent/CookieConsent"; */
import Cookies from "js-cookie";
import Logo from "../../assets/logo (1).png";
import main1 from "../../assets/undraw_bitcoin-p2-p_pykv.svg";
import coin1 from "../../assets/bitcoin.webp";
import coin2 from "../../assets/ethereum.webp";
import coin3 from "../../assets/Tether.webp";
import coin4 from "../../assets/bnb-icon2_2x.webp";
import main2 from "../../assets/undraw_crypto-flowers_5m2p.svg";
import main3 from "../../assets/undraw_bitcoin_q7r1.svg";
import main4 from "../../assets/undraw_ethereum_5s6b.svg";
import main5 from "../../assets/undraw_stock-prices_8nuz.svg";
import main6 from "../../assets/undraw_ether_dnch.svg";
import Footer from "../Footer/Footer";
import Spline from "@splinetool/react-spline";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./LangingPage.css";
import HeroImg from "../../assets/undraw_crypto-portfolio_cat6.svg";
import { Link, Outlet } from "react-router-dom";
import { IconSwimming } from "@tabler/icons-react";
import Accordion from "../../ui/ui/Accordion";
function LandingPage() {
  return (
    <>
      <a href="#header">
        <svg
          className="top"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6 7 18 7V9L6 9 6 7ZM12 11 6 17H18L12 11Z"></path>
        </svg>
      </a>
      <main className="page">
        <CoinContextProvider />
        {/*  <CookieConsent /> */}
        <div className="header" id="header">
          <div className="link">
            <img src={Logo} alt="" />
            <div className="trade">
              <ul>
                <li>Home</li>
                <li>About</li>
                <Link to={"/home"}>
                  <li>Coins</li>
                </Link>
              </ul>
              <div className="navbtn">
                <Link to={"/form"}>
                  <button class="Btn">
                    <div class="text">Login</div>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="responsiveHeader">
            <img src={Logo} alt="logo" />
            <div className="ham"></div>
          </div>

          <ul class="fixed-nav">
            <Link to={"/landingPage"}>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.5812 2.68627C12.2335 2.43791 11.7664 2.43791 11.4187 2.68627L1.9187 9.47198L3.08118 11.0994L11.9999 4.7289L20.9187 11.0994L22.0812 9.47198L12.5812 2.68627ZM19.5812 12.6863L12.5812 7.68627C12.2335 7.43791 11.7664 7.43791 11.4187 7.68627L4.4187 12.6863C4.15591 12.874 3.99994 13.177 3.99994 13.5V20C3.99994 20.5523 4.44765 21 4.99994 21H18.9999C19.5522 21 19.9999 20.5523 19.9999 20V13.5C19.9999 13.177 19.844 12.874 19.5812 12.6863Z"></path>
                  </svg>
                </span>{" "}
                <span>Home</span>
              </li>
            </Link>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11H1L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11H20V20ZM12 17L15.3588 13.6412C16.2374 12.7625 16.2374 11.3379 15.3588 10.4592C14.4801 9.58056 13.0555 9.58056 12.1768 10.4592L12 10.636L11.8232 10.4592C10.9445 9.58056 9.51992 9.58056 8.64124 10.4592C7.76256 11.3379 7.76256 12.7625 8.64124 13.6412L12 17Z"></path>
                </svg>
              </span>{" "}
              <span>About</span>
            </li>
            <Link to={"/form"}>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.0049 2.00281C18.4232 2.00281 22.0049 5.58453 22.0049 10.0028C22.0049 13.2474 20.0733 16.0409 17.2973 17.296C16.0422 20.0718 13.249 22.0028 10.0049 22.0028C5.5866 22.0028 2.00488 18.4211 2.00488 14.0028C2.00488 10.7587 3.9359 7.96554 6.71122 6.71012C7.96681 3.93438 10.7603 2.00281 14.0049 2.00281ZM11.0049 9.00281H9.00488V10.0028C7.62417 10.0028 6.50488 11.1221 6.50488 12.5028C6.50488 13.8283 7.53642 14.9128 8.84051 14.9975L9.00488 15.0028H11.0049L11.0948 15.0109C11.328 15.0532 11.5049 15.2573 11.5049 15.5028C11.5049 15.7483 11.328 15.9524 11.0948 15.9948L11.0049 16.0028H7.00488V18.0028H9.00488V19.0028H11.0049V18.0028C12.3856 18.0028 13.5049 16.8835 13.5049 15.5028C13.5049 14.1773 12.4733 13.0928 11.1693 13.0081L11.0049 13.0028H9.00488L8.91501 12.9948C8.68176 12.9524 8.50488 12.7483 8.50488 12.5028C8.50488 12.2573 8.68176 12.0532 8.91501 12.0109L9.00488 12.0028H13.0049V10.0028H11.0049V9.00281ZM14.0049 4.00281C12.2214 4.00281 10.6196 4.78097 9.52064 6.01629C9.68133 6.00764 9.84254 6.00281 10.0049 6.00281C14.4232 6.00281 18.0049 9.58453 18.0049 14.0028C18.0049 14.1655 18 14.327 17.9905 14.4873C19.2265 13.3885 20.0049 11.7866 20.0049 10.0028C20.0049 6.6891 17.3186 4.00281 14.0049 4.00281Z"></path>
                  </svg>
                </span>{" "}
                <span>Coins</span>
              </li>
            </Link>
            <Link to={"/form"}>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4 15H6V20H18V4H6V9H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z"></path>
                  </svg>
                </span>{" "}
                <span>Login</span>
              </li>
            </Link>
          </ul>
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
              <Link to={"/trade"}>
                <button>Let's Trade</button>
              </Link>
              <Link to={"/form"}>
                <button className="nth">View coins</button>
              </Link>
            </div>
          </div>
          <div className="landing2">
            <img src={HeroImg} alt="" />
          </div>
        </section>

        <section>
          <div className="contactLinks">
            <ul className="example-2">
              <li className="icon-content">
                <a
                  href="https://www.spotify.com/"
                  aria-label="whatsapp"
                  data-social="whatsapp"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z"></path>
                  </svg>
                </a>
                <div className="tooltip">whatsapp</div>
              </li>
              <li className="icon-content">
                <a
                  href="https://www.pinterest.com/"
                  aria-label="instagram"
                  data-social="instagram"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                  </svg>
                </a>
                <div className="tooltip">instagram</div>
              </li>
              <li className="icon-content">
                <a
                  href="https://dribbble.com/"
                  aria-label="Dribbble"
                  data-social="dribbble"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
                  </svg>
                </a>
                <div className="tooltip">linkedin</div>
              </li>
              <li className="icon-content">
                <a
                  href="https://telegram.org/"
                  aria-label="Telegram"
                  data-social="telegram"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
                  </svg>
                </a>
                <div className="tooltip">Facebook</div>
              </li>

              <li className="icon-content">
                <a
                  href="https://telegram.org/"
                  aria-label="github"
                  data-social="github"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                  </svg>
                </a>
                <div className="tooltip">Github</div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="altcoin">
            <img src={main1} alt="" />
            <img src={main2} alt="" />
            <img src={main3} alt="" />
            <img src={main4} alt="" />
            <img src={main5} alt="" />
          </div>
        </section>

        <section>
          <div className="about">
            <img src={main6} alt="" />
            <div className="name">
              <h1>
                <span>
                  <em>//</em>
                </span>
                About
              </h1>
              <p>
                In the fastpaced universe of cryptocurrency, staying informed is
                the key to staying ahead. That’s why we built AltcoinPrices a
                clean, simple, and powerful platform where you can track
                real-time prices, trends, and essential data for a wide range of
                altcoins.
              </p>
              <div className="names">
                <h2>
                  Whether you're a seasoned crypto investor or just starting
                  out, AltcoinPrices gives you instant access to
                </h2>
                <div className="ul">
                  <li>
                    {" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M16 12L10 18V6L16 12Z"></path>
                      </svg>
                    </span>{" "}
                    Live market data for hundreds of altcoins
                  </li>
                  <li>
                    {" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M16 12L10 18V6L16 12Z"></path>
                      </svg>
                    </span>{" "}
                    Simple search and filtering tools
                  </li>
                  <li>
                    {" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M16 12L10 18V6L16 12Z"></path>
                      </svg>
                    </span>{" "}
                    Easy-to-read charts and price histories
                  </li>
                </div>
                <p>
                  Our goal? To make cryptocurrency tracking easy, reliable, and
                  beautiful. No distractions. No confusion. Just the information
                  you need, when you need it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="landingCoin">
          <h1>TREnding COINS</h1>
          <div>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 1000 }}
              modules={[Pagination, Navigation]}
            >
              <SwiperSlide>
                <div className="card">
                  <div className="cards">
                    <img src={coin1} alt="" />
                    <h1>Bitcoin</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid minima porro natus animi quaerat, mollitia
                      perferendis enim facere? Vitae aliquid dolores rerum unde.
                      Ullam quaerat fugiat repellat deleniti possimus minus!
                    </p>
                    <h2>Price:$3000</h2>
                  </div>
                  <div className="cards">
                    <img src={coin2} alt="" />
                    <h1>Bitcoin</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid minima porro natus animi quaerat, mollitia
                      perferendis enim facere? Vitae aliquid dolores rerum unde.
                      Ullam quaerat fugiat repellat deleniti possimus minus!
                    </p>
                    <h2>Price:$3000</h2>
                  </div>

                  <div className="cards">
                    <img src={coin3} alt="" />
                    <h1>Bitcoin</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid minima porro natus animi quaerat, mollitia
                      perferendis enim facere? Vitae aliquid dolores rerum unde.
                      Ullam quaerat fugiat repellat deleniti possimus minus!
                    </p>
                    <h2>Price:$3000</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <div className="cards">
                    <img src={coin4} alt="" />
                    <h1>Bitcoin</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid minima porro natus animi quaerat, mollitia
                      perferendis enim facere? Vitae aliquid dolores rerum unde.
                      Ullam quaerat fugiat repellat deleniti possimus minus!
                    </p>
                    <h2>Price:$3000</h2>
                  </div>
                  <div className="cards">
                    <img src={coin1} alt="" />
                    <h1>Bitcoin</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid minima porro natus animi quaerat, mollitia
                      perferendis enim facere? Vitae aliquid dolores rerum unde.
                      Ullam quaerat fugiat repellat deleniti possimus minus!
                    </p>
                    <h2>Price:$3000</h2>
                  </div>

                  <div className="cards">
                    <img src={coin1} alt="" />
                    <h1>Bitcoin</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid minima porro natus animi quaerat, mollitia
                      perferendis enim facere? Vitae aliquid dolores rerum unde.
                      Ullam quaerat fugiat repellat deleniti possimus minus!
                    </p>
                    <h2>Price:$3000</h2>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="responsive-slide">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            navigation
            slidesPerView={1}
            spaceBetween={20}
          >
            <div className="card">
              <SwiperSlide>
                <div className="cards">
                  <img src={coin1} alt="" />
                  <h1>Bitcoin</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid minima porro natus animi quaerat, mollitia
                    perferendis enim facere? Vitae aliquid dolores rerum unde.
                    Ullam quaerat fugiat repellat deleniti possimus minus!
                  </p>
                  <h2>Price:$3000</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <img src={coin1} alt="" />
                  <h1>Bitcoin</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid minima porro natus animi quaerat, mollitia
                    perferendis enim facere? Vitae aliquid dolores rerum unde.
                    Ullam quaerat fugiat repellat deleniti possimus minus!
                  </p>
                  <h2>Price:$3000</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <img src={coin1} alt="" />
                  <h1>Bitcoin</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid minima porro natus animi quaerat, mollitia
                    perferendis enim facere? Vitae aliquid dolores rerum unde.
                    Ullam quaerat fugiat repellat deleniti possimus minus!
                  </p>
                  <h2>Price:$3000</h2>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </section>

        <section className="question">
          <h1>Frequently Asked Questions</h1>
          <Accordion />
        </section>

        <section className="exclusive">
          <h1>One API for All Crypto Market Data</h1>
          <div className="shift">
            <div className="wrote">
              <div className="bot">
                <span></span>
                <span>
                  <h3>Exclusive</h3>
                  <div>
                    <p>Independently sourced & aggregated data</p>
                    <div className="li">
                      <li>
                        Data for over 17,000+ cryptocurrencies such as Bitcoin,
                        Ethereum tracked across over 1,000+ crypto exchanges
                        like Binance, Crypto.com, and Kraken
                      </li>
                      <li>
                        More than 9M+ tokens data tracked across 200+ blockchain
                        networks and 1,000+ decentralised exchanges
                      </li>
                      <li>
                        2,000+ NFT collections tracked across 30+ marketplaces
                        like Opensea, Looksrare and more!
                      </li>
                    </div>
                  </div>
                </span>
              </div>
              <div className="bot">
                <span></span>
                <span>
                  <h3>Exclusive</h3>
                  <div>
                    <p>Independently sourced & aggregated data</p>
                    <div className="li">
                      <li>
                        Data for over 17,000+ cryptocurrencies such as Bitcoin,
                        Ethereum tracked across over 1,000+ crypto exchanges
                        like Binance, Crypto.com, and Kraken
                      </li>
                      <li>
                        More than 9M+ tokens data tracked across 200+ blockchain
                        networks and 1,000+ decentralised exchanges
                      </li>
                      <li>
                        2,000+ NFT collections tracked across 30+ marketplaces
                        like Opensea, Looksrare and more!
                      </li>
                    </div>
                  </div>
                </span>
              </div>
              <div className="bot">
                <span></span>
                <span>
                  <h3>Exclusive</h3>
                  <div>
                    <p>Independently sourced & aggregated data</p>
                    <div className="li">
                      <li>
                        Data for over 17,000+ cryptocurrencies such as Bitcoin,
                        Ethereum tracked across over 1,000+ crypto exchanges
                        like Binance, Crypto.com, and Kraken
                      </li>
                      <li>
                        More than 9M+ tokens data tracked across 200+ blockchain
                        networks and 1,000+ decentralised exchanges
                      </li>
                      <li>
                        2,000+ NFT collections tracked across 30+ marketplaces
                        like Opensea, Looksrare and more!
                      </li>
                    </div>
                  </div>
                </span>
              </div>
            </div>

            <div className="style">
              <Spline
                className="spline"
                scene="https://prod.spline.design/vLWuG3tkpCnynESy/scene.splinecode"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="contact-form">
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;