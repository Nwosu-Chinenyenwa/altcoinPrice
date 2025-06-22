import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import "./CookieConsent.css";
//6LcdKWkrAAAAADj2tBOwdGrW5PlKvCYlOoVlWEHa

export default function CookieConsent() {
  const location = useLocation();
  const [DisplayCookies, setDisplayCookies] = useState(false);

  useEffect(() => {
    const Content = Cookies.get("DisplayCookies");
    console.log("CookieConsent component rendered", Content);

    if (!Content && location.pathname === "/landingPage") {
      setDisplayCookies(true);
    } else {
      setDisplayCookies(false);
    }
  }, [location]);

  const handleAcceptCookies = () => {
    Cookies.set("DisplayCookies", "true", { expires: 365 });
    setDisplayCookies(false);
  };
  const handleRejectCookies = () => {
    Cookies.set("DisplayCookies", "false", { expires: 365 });
    setDisplayCookies(false);
  };
  return (
    <>
      {DisplayCookies && (
        <section className="card">
          <div className="cards">
            <div className="card-header">
              <h2>Cookie Consent</h2>
              <svg
                onClick={() => setDisplayCookies(false)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
              </svg>
            </div>

            <div className="card-body">
              <p>
                We use cookies to enhance your experience on our website. By
                continuing to use our site, you agree to our use of cookies.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                suscipit repudiandae, quaerat, delectus laborum, accusamus fuga
                corrupti quod cum consectetur voluptatem expedita quos doloribus
                eum voluptatum temporibus officiis omnis cupiditate.
              </p>
              <div>
                <button className="accept-button" onClick={handleAcceptCookies}>
                  ACCEPT
                </button>

                <button className="reject-button" onClick={handleRejectCookies}>
                  DENY
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
