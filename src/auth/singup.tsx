import React, { useState } from "react";
import imgSignup from "../assets/image/signup.png";

interface SignUpProps {
  onToggle: (value: string) => void;
}

const Signup: React.FC<SignUpProps> = ({ onToggle }) => {
  const [email, setEmail] = useState("");

  const handleSignup = () => {
    // Implement signup logic here (e.g., make an API request to create a new user)
    // You should add validation and error handling as needed.
  };

  return (
    <div className="et-flex et-flex-item et-flex-col et-align-items-center gap-10">
      {/* <h2>Signup</h2> */}
      <form className="et-flex et-flex-item  et-flex-col et-justify-content-space-between gap-10">
        <div className="form-group et-flex-item">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary et-flex-item"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </form>
      <div className="et-flex-item">
        <div></div>
        <div>OR</div>
        <div></div>
      </div>
      <div className="et-flex-item">
        <img src={imgSignup} alt="Google Sign up" width={200} />
      </div>
      <div className="et-flex-item">
        <div>------------------------------</div>
      </div>
      <div className="et-flex-item">
        Do you have an account ?{" "}
        <button
          type="button"
          className="btn btn-link"
          onClick={() => onToggle("login")}
        >
          Log In
        </button>
      </div>{" "}
      <br />
    </div>
  );
};

export default Signup;
