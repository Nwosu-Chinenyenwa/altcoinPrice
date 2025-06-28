import React, { useState, useEffect } from "react";
import "./Form.css";
import { useNavigate, Outlet } from "react-router-dom";
import { auth } from "../firebase/firebase";
import Cookies from "js-cookie";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import "./Form.css";
import ReCAPTCHA from "react-google-recaptcha";
import useRecaptcha from "../form/reCAPTCHA";
import axios from "axios";

function Form() {
  const { capchaToken, recaptchaRef, handleRecaptcha } = useRecaptcha(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = Cookies.get("useremail");
    const savedPassword = Cookies.get("userpassword");
    const savedName = Cookies.get("username");

    if (savedEmail) setEmail(savedEmail);
    if (savedPassword) setPassword(savedPassword);
    if (savedName) setName(savedName);
  }, []);

  useEffect(() => {
    Cookies.set("useremail", email);
    Cookies.set("userpassword", password);
    Cookies.set("username", name);
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
      const erroralert = handleError(error.code);
      alert(erroralert);
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
      const viewError = handleError(error.code);
      alert(viewError);
    } finally {
      setLoading(false);
    }
  };

  /*   errormessage */
  const handleError = (error) => {
    switch (error) {
      case "auth/email-already-in-use":
        return "This email is already registered. Please log in instead.";
      case "auth/invalid-email":
        return "The email address is invalid.";
      case "auth/weak-password":
        return "Password should be at least 6 characters.";
      case "auth/user-not-found":
        return "No account found with this email.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/network-request-failed":
        return "Network error. Check your connection.";
      default:
        return "Something went wrong. Please try again.";
    }
  };

  /*   recaptcha */
  const submit = async (e) => {
    e.preventDefault();
    if (capchaToken && username && password) {
      const result = await axios.post(`https://your-login-endpoint`, {
        username,
        password,
        capchaToken,
      });
      if (result.data.recaptchaValid === false) {
        alert("ReCAPTCHA validation failed. Please try again.");
        handleRecaptcha("");
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        return;
      }

      recaptchaRef.current?.reset();
      if (result.data.success) {
        console.log("Login successful");
        // ...
      } else {
        alert("Login failed. Please check your credentials and try again.");
      }
    } else {
      alert("Please fill in all fields and complete the captcha.");
    }
  };

  if (recaptchaRef === false)
    return <h3> recaptchaRef loading</h3>;

  return (
    <section className="forms">
      {!showLogin ? (
        <div className="login-container">
          <form className="login-form" onSubmit={handleSignUp}>
            <p className="heading">Signup</p>
            <p className="paragraph">Welcome To AltcoinPrices</p>

            <div className="input-group">
              <input
                required
                placeholder="Username"
                id="username"
                name="username"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-group">
              <input
                required
                placeholder="Useremail"
                id="useremail"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <input
                required
                placeholder="Password"
                name="password"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <ReCAPTCHA
              style={{
                position: "relative",
                left: "10px",
                marginBottom: "10px",
              }}
              ref={recaptchaRef}
              sitekey="6Ld90nArAAAAAIuLozUROtWg36fmY3hzvUhWBPzq"
              onChange={handleRecaptcha}
            />

            <button
              type="submit"
              disabled={loading && !capchaToken}
              onClick={submit}
            >
              {loading ? <span className="spinner"></span> : "Sign Up"}
            </button>

            <div className="bottom-text">
              <p className="para" onClick={() => setShowLogin(true)}>
                Already have an account?{" "}
                <span style={{ color: "#3498db", cursor: "pointer" }}>
                  Log in
                </span>
              </p>
            </div>
          </form>
        </div>
      ) : (
        <div className="login-container">
          <form className="login-form" onSubmit={handleLogin}>
            <p className="heading">Login</p>
            <p className="paragraph">Login to your account</p>

            <div className="input-group">
              <input
                required
                placeholder="Useremail"
                id="useremail"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <input
                required
                placeholder="Password"
                name="password"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? <span className="spinner"></span> : "Login"}
            </button>

            <div className="bottom-text">
              <p className="para" onClick={() => setShowLogin(false)}>
                Don’t have an account?{" "}
                <span style={{ color: "#3498db", cursor: "pointer" }}>
                  Sign up
                </span>
              </p>
            </div>
          </form>
        </div>
      )}
      <Outlet />
    </section>
  );
}

export default Form;
