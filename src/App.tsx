import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Login from "./auth/Login";
import Signup from "./auth/singup";
import etHomeImage from "./assets/image/et-home.webp";

function App() {
  const [auth, setAuth] = useState("login");

  return (
    <div className="et-flex et-flex-col et-md-flex-dir-row et-align-items-center min-height-100">
      <div id ="loginImageId" className="et-flex et-flex-item">
        <img
          src={etHomeImage}
          alt="Home Page"
          className="et-flex-item"
          width={480}
        />
      </div>
      <div className="et-flex-item et-flex et-justify-content-center">
        {auth == "login" ? (
          <Login />
        ) : auth == "signup" ? (
          <Signup />
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
}

export default App;
