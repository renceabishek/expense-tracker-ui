import React, { useState } from "react";
import "./App.scss";
import AuthWrapper from "./auth/AuthWrapper";
import Home from "./home/home";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
  const [auth, setAuth] = useState("login");

  return (
    <div className="et-flex et-flex-col min-height-100">
      <div className="et-flex-item">
        {auth === "login" ? <AuthWrapper /> : <Home />}
      </div>
    </div>
  );
}

export default App;
