import React from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";
import padlock from "../../assets/padlock.png";
import logoImage from '../../assets/logo.svg'
export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImage} alt="JenniferLogo" />
        <form>
          <h1>Access your account</h1>
          <input placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit"></button>
        </form>
      </section>
      <img src={padlock} alt="Login" />
    </div>
  );
}
