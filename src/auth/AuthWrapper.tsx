import React, { useState } from "react";
import "./AuthWrapper.scss";
import etHomeImage from "../assets/image/et-home.webp";
import Login from "./Login";
import Signup from "./singup";

function AuthWrapper() {
  const [auth, setAuth] = useState("login");

  const toggleView = (value: string) => {
    setAuth(value);
  };

  return (
    <div className="et-flex et-flex-col et-md-flex-dir-row et-align-items-center min-height-100">
      <div className="et-flex et-flex-item">
        <img
          src={etHomeImage}
          alt="Home Page"
          className="et-flex-item"
          width={480}
        />
      </div>
      <div className="et-flex-item et-flex et-justify-content-center">
        <div className="et-flex et-flex-col et-align-items-center auth-border">
          <div className="et-flex-item">
            <br />
            <h2>Expense Tracker</h2> <br />
          </div>
          {auth === "login" ? (
            <Login onToggle={toggleView} />
          ) : (
            <Signup onToggle={toggleView} />
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthWrapper;
