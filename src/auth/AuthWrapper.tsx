import React, { useState } from "react";
import "./AuthWrapper.scss";
import etHomeImage from "../assets/image/et-home.webp";
import Login from "./Login";
import Signup from "./singup";
import tickImage from "../assets/image/success-tick.png";

function AuthWrapper() {
  const [auth, setAuth] = useState("login");
  const [info, setInfo] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  const toggleView = (
    value: string,
    isSuccess?: boolean,
    infoFromAnotherComponent?: string
  ) => {
    setAuth(value);
    setInfo(
      infoFromAnotherComponent !== undefined ? infoFromAnotherComponent : ""
    );
    setIsSuccess(isSuccess !== undefined ? isSuccess : false);
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
          ) : auth === "signup" ? (
            <Signup onToggle={toggleView} />
          ) : (
            <Message info={info} success={isSuccess} onToggle={toggleView} />
          )}
        </div>
      </div>
    </div>
  );
}

interface MessageProps {
  info: string;
  success: boolean;
  onToggle: (value: string, isSuccess: boolean, info: string) => void;
}

function Message(props: MessageProps) {
  return (
    <div className="et-flex et-flex-item et-flex-col et-align-items-center">
      <h2 className="et-flex-item">🎉 Almost there!</h2>
      <div className="et-flex-item p-15 et-flex et-flex-col et-align-items-center ">
        <p className="et-flex-item"> {props.info} </p>
        {props.success ? (
          <div className="et-flex-item">
            <img src={tickImage} alt="Success" width={100} />
          </div>
        ) : (
          <div className="et-flex-item"></div>
        )}
      </div>

      <div className="et-flex-item">
        <button
          type="button"
          className="btn btn-primary "
          onClick={() => props.onToggle("login", true, "")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default AuthWrapper;
