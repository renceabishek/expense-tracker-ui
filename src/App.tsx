import React, { useState } from "react";
import "./App.scss";
import AuthWrapper from "./auth/AuthWrapper";
import ExpenseWrapperComponent from "./ExpenseWrapperComponent/ExpenseWrapperComponent";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
  const [auth, setAuth] = useState("login");

  return (
    <div className="et-flex et-flex-col min-height-100">
      <div className="et-flex-item">
      <ExpenseWrapperComponent />
      </div>
    </div>
  );
}

export default App;
