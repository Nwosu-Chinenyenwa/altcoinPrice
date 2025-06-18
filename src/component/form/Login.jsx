import React, { useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Login() {
  // Local storage states
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("useremail");
    const storedPassword = localStorage.getItem("userpassword");
    const storedName = localStorage.getItem("username");

    if (storedEmail) setemail(storedEmail);
    if (storedPassword) setpassword(storedPassword);
    if (storedName) setname(storedName);
  }, []);

  useEffect(() => {
    localStorage.setItem("username", name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem("useremail", email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem("userpassword", password);
  }, [password]);

  /*   firebase */
  const handleLogin = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Welcome Back</h2>
        <p className="subtitle">Login to your crypto dashboard</p>

        <input
          type="email"
          name="Email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? <span className="spinner"></span> : "Login"}
        </button>

      </form>
      <Outlet />
    </div>
  );
}

export default Login;
