import React from "react";

interface RegisterProps {
  onformSwitch: (formType: string) => void;
}

export const Register: React.FC<RegisterProps> = (props) => {
  return (
    <div className="mycontainer">
      <div>Register</div>
      <button className="btn btn-link mr-btm-10" onClick={() => props.onformSwitch("login")}>
        Back to Login Page
      </button>
      </div>
  );
};
