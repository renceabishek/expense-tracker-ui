import React, { useState } from "react";
import "./Login.scss";
import imgSignIn from "../assets/image/dummyGsignin.png";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement login logic here (e.g., make an API request to authenticate user)
    // You should add validation and error handling as needed.
  };

  return (
    <div className="et-flex et-flex-col et-align-items-center gap-10 auth-border">
      <div className="et-flex-item">
        <br />
        <h2>Expense Tracker</h2> <br />
      </div>
      <div className="card-body et-flex-item">
        <form className="et-flex et-flex-col et-justify-content-space-between gap-10">
          <div className="form-group et-flex-item">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group et-flex-item">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary et-flex-item"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
      <div className="et-flex-item">
        <div></div>
        <div>OR</div>
        <div></div>
      </div>
      <div className="et-flex-item">
        <img src={imgSignIn} width={200} />
      </div>
      <div className="et-flex-item">
        <a> Forget Password ?</a>
      </div>
      <div className="et-flex-item">
        <div>------------------------------</div>
      </div>
      <div className="et-flex-item">Dont Have an account ? Sign In</div> <br />
    </div>
  );
};

export default Login;
