import React, { useState } from "react";
import  {apiservices} from './restservices/apiservices.ts';

interface LoginProps {
  onformSwitch: (formType: string) => void;
}

export const Login: React.FC<LoginProps> = (props) => {
  const [email, setMail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("USER MAIL", email);
    console.log("USER PASSWORD", pass);

    //alert("Hiii GANESHA==> "+email+" PWD "+pass);
    apiservices.dologin(email,pass)
  };

  //api.dologinsdkdsjg();

  return (
    <div className="mycontainer">
    <form className="loginform" onSubmit={handleSubmit}>
      <label htmlFor="email" className="label-email">email : </label>
      <input
        type="email"
        placeholder="Please enter your email"
        id="emailId"
        value={email}
        className="mr-btm-10 inputwdth"
        onChange={(e) => setMail(e.target.value)}
      />
      <label htmlFor="Password" className="label-pwd">Password : </label>
      <input
        type="password"
        placeholder="Please enter your Password"
        id="pwdId"
        value={pass}
        className="mr-btm-10 inputwdth"
        onChange={(e) => setPass(e.target.value)}
      />
      <button className="btn btn-primary mr-btm-10 inputwdth" type="submit">Log In</button>
      <button className="btn btn-link mr-btm-10" onClick={() => props.onformSwitch("register")}>
        Dont have an account ? Click to Register
      </button>
    </form>
    </div>
  );
};