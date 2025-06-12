import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loader.css';

export default function Loader() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');

    if (hasSeenLoader) {
      navigate('/welcome');
    } else {
      const timer = setTimeout(() => {
        sessionStorage.setItem('hasSeenLoader', 'true');
        navigate('/welcome');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [navigate]);


  const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
  if (hasSeenLoader) return null;

  return (
    <section className="load">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
      <div className="loader">
        <span></span>
      </div>
      
      <div className="card">
        <div className="loader">
          <p>loading</p>
          <div className="words">
            <span className="word">images</span>
            <span className="word">coin</span>
            <span className="word">form</span>
            <span className="word">pages</span>
            <span className="word">buttons</span>
          </div>
        </div>
      </div>
    </section>
  );
}
