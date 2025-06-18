import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import "./signup.css";
import "./Login.css";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("useremail");
    const savedPassword = localStorage.getItem("userpassword");
    const savedName = localStorage.getItem("username");

    if (savedEmail) setEmail(savedEmail);
    if (savedPassword) setPassword(savedPassword);
    if (savedName) setName(savedName);
  }, []);

  useEffect(() => {
    localStorage.setItem("useremail", email);
    localStorage.setItem("userpassword", password);
    localStorage.setItem("username", name);
  }, [email, password, name]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: name });
      navigate("/home");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-wrapper">
        {!showLogin ? (
          <form className="login-card" onSubmit={handleSignUp}>
            <h2>Welcome</h2>
            <p className="subtitle">Create your crypto dashboard account</p>

            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" disabled={loading}>
              {loading ? <span className="spinner"></span> : "Sign Up"}
            </button>

            <p className="para" onClick={() => setShowLogin(true)}>
              Already have an account?{" "}
              <span style={{ color: "#3498db", cursor: "pointer" }}>Log in</span>
            </p>
          </form>
        ) : (
          <form className="login-card" onSubmit={handleLogin}>
            <h2>Welcome Back</h2>
            <p className="subtitle">Login to your crypto dashboard</p>

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" disabled={loading}>
              {loading ? <span className="spinner"></span> : "Login"}
            </button>

            <p className="para" onClick={() => setShowLogin(false)}>
              Don’t have an account?{" "}
              <span style={{ color: "#3498db", cursor: "pointer" }}>Sign up</span>
            </p>
          </form>
        )}
      </div>
      <Outlet />
    </>
  );
}

export default SignUp;