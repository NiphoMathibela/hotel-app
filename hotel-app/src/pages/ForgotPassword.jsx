import { React, useContext } from "react";
import {UserContext} from "../contexts/UserContext";
import "./Login.css"

const ForgotPassword = () => {
  const { email, setEmail, pwd, setPwd } = useContext(UserContext);
  return (
    <div className = "login">
      <div className = "login-header">
        <h1>Forgot Password?</h1>
        <p>Enter your details</p>
      </div>

      <form>
        <label htmlFor="email">Email</label>
        <input
        id="email"
          name="email"
          type="email"
          value={email}
          placeholder="Type your email"
        />

        <button className="btn-1">Send recovery email</button>

      </form>
    </div>
  );
};

export default ForgotPassword;
