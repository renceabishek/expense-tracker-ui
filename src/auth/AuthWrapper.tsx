import React, { useState } from "react";
import "./AuthWrapper.scss";
import etHomeImage from "../assets/image/et-home.webp";
import Login from "./Login";
import Signup from "./singup";
import tickImage from "../assets/image/success-tick.png";
import infoImage from "../assets/image/info.svg";
import Msg from "../constant";
import AuthResponse from "../model/AuthResponse";

function AuthWrapper() {
  let val: AuthResponse = {
    emailid: "",
  };

  const [auth, setAuth] = useState("login");
  const [code, setCode] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);
  const [value, setValue] = useState(val);

  const toggleView = (
    componentName: string,
    isSuccess?: boolean,
    code?: string,
    value?: AuthResponse
  ) => {
    setAuth(componentName);
    setCode(code !== undefined ? code : "");
    setIsSuccess(isSuccess !== undefined ? isSuccess : false);
    setValue(value !== undefined ? value : val);
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
          ) : auth === "forgetpassword" ? (
            <Signup onToggle={toggleView} />
          ) : (
            <Message
              code={code}
              success={isSuccess}
              value={value}
              onToggle={toggleView}
            />
          )}
        </div>
      </div>
    </div>
  );
}

interface MessageProps {
  code: string;
  success: boolean;
  value: AuthResponse;
  onToggle: (value: string, isSuccess: boolean, info: string) => void;
}

function Message(props: MessageProps) {
  return (
    <div className="et-flex et-flex-item et-flex-col et-align-items-center">
      {props.success ? (
        <MessageET001
          code={props.code}
          success={props.success}
          value={props.value}
          onToggle={props.onToggle}
        />
      ) : (
        <div>
          {props.code === "ET-1000" ? (
            <MessageET1000
              code={props.code}
              success={props.success}
              value={props.value}
              onToggle={props.onToggle}
            />
          ) : props.code === "ET-1001" ? (
            <MessageET1001
              code={props.code}
              success={props.success}
              value={props.value}
              onToggle={props.onToggle}
            />
          ) : (
            <MessageET000
              code={props.code}
              success={props.success}
              value={props.value}
              onToggle={props.onToggle}
            />
          )}
        </div>
      )}
    </div>
  );
}

function MessageET001(props: MessageProps) {
  let information = Msg.success.signup["ET-001"].replace(
    "<EMAIL_ID>",
    props.value.emailid
  );
  return (
    <div className="et-flex et-flex-item et-flex-col et-align-items-center">
      <div className="et-flex-item et-flex et-flex-col et-align-items-center">
        <h2 className="et-flex-item">🎉 Almost there!</h2>
        <div className="et-flex-item p-15 et-flex et-flex-col et-align-items-center ">
          <p className="et-flex-item"> {information} </p>

          <div className="et-flex-item">
            <img src={tickImage} alt="Success" width={100} />
          </div>
        </div>
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

function MessageET1000(props: MessageProps) {
  let information = Msg.failure.signup["ET-1000"].replace("<HERE>", "");
  return (
    <div className="et-flex et-flex-item et-flex-col et-align-items-center">
      <div className="et-flex-item et-flex et-flex-col et-align-items-center">
        <div className="et-flex-item">
          <img src={infoImage} alt="Info" width={100} />
        </div>
        <h2 className="et-flex-item">Oops!</h2>
        <div className="et-flex-item p-15 et-flex et-flex-col et-align-items-center ">
          <p className="et-flex-item">
            {" "}
            {information} <a href="#">Here</a>{" "}
          </p>
        </div>
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

function MessageET1001(props: MessageProps) {
  let information = Msg.failure.signup["ET-1001"];
  return (
    <div className="et-flex et-flex-item et-flex-col et-align-items-center">
      <div className="et-flex-item et-flex et-flex-col et-align-items-center">
        <div className="et-flex-item">
          <img src={infoImage} alt="Info" width={100} />
        </div>
        <h2 className="et-flex-item">Oops!</h2>
        <div className="et-flex-item p-15 et-flex et-flex-col et-align-items-center ">
          <p className="et-flex-item">
            {" "}
            {information} <a href="#">Here</a>
            {" to reset"}
          </p>
        </div>
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

function MessageET000(props: MessageProps) {
  let information = Msg.failure.signup["ET-000"];
  return (
    <div className="et-flex et-flex-item et-flex-col et-align-items-center">
      <div className="et-flex-item et-flex et-flex-col et-align-items-center">
        <div className="et-flex-item">
          <img src={infoImage} alt="Info" width={100} />
        </div>
        <h2 className="et-flex-item">Oops!</h2>
        <div className="et-flex-item p-15 et-flex et-flex-col et-align-items-center ">
          <p className="et-flex-item">{information}</p>
        </div>
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
