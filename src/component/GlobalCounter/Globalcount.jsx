import React, { useEffect, useState } from "react";
import { database, ref, onValue, set } from ".././firebase/firebase";

export default function Globalcount() {
  const [trueSpan, settrueSpan] = useState(0);
  const [falseSpan, setfalseSpan] = useState(0);
  const [all, setall] = useState(true);

  useEffect(() => {
    const countRef = ref(database, "globalCount");
    const dislikeRef = ref(database, "globalDislikeCount");

    onValue(countRef, (snapshot) => {
      const value = snapshot.val();
      if (value !== null) {
        settrueSpan(value);
      }
    });

    onValue(dislikeRef, (snapshot) => {
      const value = snapshot.val();
      if (value !== null) {
        setfalseSpan(value);
      }
    });
  }, []);

 
  const handleLike = () => {
    if (localStorage.getItem("voted-like")) {
      alert("You've already liked this post.");
      return;
    }

    const newLike = trueSpan + 1;
    const countRef = ref(database, "globalCount");

    set(countRef, newLike)
      .then(() => {
        settrueSpan(newLike); 
        console.log("✅ Like saved:", newLike);
      })
      .catch((err) => console.error("❌ Error saving like:", err));
  };

  const handleDislike = () => {
    if (localStorage.getItem("voted-dislike")) {
      alert("You've already disliked this post.");
      return;
    }

    const newDislike = falseSpan + 1;
    const dislikeRef = ref(database, "globalDislikeCount");

    set(dislikeRef, newDislike)
      .then(() => {
        setfalseSpan(newDislike);
        localStorage.setItem("voted-dislike", "true");
        console.log(" Dislike saved:", newDislike);
      })
      .catch((err) => console.error("Error saving dislike:", err));
  };

  return (
    <>
      {all && (
        <section className="code">
          <div className="like-dislike-container">
            <div className="tool-box">
              <button className="btn-close" onClick={() => setall(false)}>
                ×
              </button>
            </div>
            <p className="text-content">
              What did you think
              <br />
              of this post?
            </p>
            <div className="icons-box">
              <div className="icons">
                <label className="btn-label" htmlFor="like-checkbox">
                  <span className="like-text-content">{trueSpan} </span>
                  <input className="input-box" id="like-checkbox" type="checkbox" />

                  <svg className="svgs" id="icon-like-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="..." />
                  </svg>

                  <svg onClick={handleLike} className="svgs" id="icon-like-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="..." />
                  </svg>

                  <div className="fireworks">
                    <div className="checked-like-fx"></div>
                  </div>
                </label>
              </div>

              <div className="icons">
                <label className="btn-label" htmlFor="dislike-checkbox">
                  <input className="input-box" id="dislike-checkbox" type="checkbox" />
                  <div className="fireworks">
                    <div className="checked-dislike-fx"></div>
                  </div>

                  <svg className="svgs" id="icon-dislike-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="..." />
                  </svg>

                  <svg onClick={handleDislike} className="svgs" id="icon-dislike-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="..." />
                  </svg>

                  <span className="dislike-text-content"> {falseSpan} </span>
                </label>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
