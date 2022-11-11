import { React, useContext } from "react";
import {UserContext} from "../contexts/UserContext";
import "./Login.css"

const ForgotPassword = () => {
  const { email, setEmail, pwd, setPwd, phoneNum, setPhoneNum, terms, setTerms } = useContext(UserContext);
  return (
    <div className = "login">
      <div className = "login-header">
        <h1>Sign Up</h1>
      </div>

      <form>
        <label htmlFor="email">Email</label>
        <input
        id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Type your email"
        />

<label htmlFor="phoneNum">Phone Number</label>
        <input
        id="phoneNum"
          name="phoneNum"
          value={phoneNum}
          type="text"
          maxLength={10}
          minLength={10}
          placeholder="Type your phone number"
          onChange={(e) => setPhoneNum(e.target.value)} 
        />

<label htmlFor="email">Password</label>
        <input
        id="pwd"
          name="password"
          type="password"
          value={pwd}
          placeholder="Type your password"
          onChange={(e) => setPwd(e.target.value)}
        />

        <button className="btn-1">Sign Up Now</button>

        <div className="terms">
            <input type="radio" name= "terms" value= {terms} id = "terms"/>
            <label htmlFor="terms">By clicking the following, you are agreeing to our Terms and Conditions.</label>
        </div>

      </form>
    </div>
  );
};

export default ForgotPassword;
