import React, { useState, useEffect } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./signup.css";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
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

  /*   firebase */
  const handleSignUp = async (e) => {
    e.preventDefault();
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("User signed up!");
    } catch (err) {
      console.error("Signup error:", err);
    } finally {
      setLoading(false);
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }

    await updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  return (
    <>
      <div className="login-wrapper">
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
          <p className="p">Already have an account? Log in</p>
        </form>
      </div>
      <Outlet />
    </>
  );
}

export default SignUp;
