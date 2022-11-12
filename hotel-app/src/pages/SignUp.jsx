import { React, useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import {useNavigate} from "react-router"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import "./Login.css";

const ForgotPassword = () => {
  const {
    email,
    setEmail,
    pwd,
    setPwd,
    phoneNum,
    setPhoneNum,
    terms,
    setTerms,
    visible,
    setVisible,
    type,
    setType,
    userDetails, name, setName
  } = useContext(UserContext);
  const [check, setCheck] = useState(false);

  const toggleCheck = () => {
    setCheck((prev) => !prev);
  };

  const togglePwd = () => {
    setVisible((prev) => !prev);

    setType(visible ? "text" : "password");
  };

  const navigate = useNavigate()

  return (
    <div className="login">
      <div className="login-header">
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
          type={type}
          value={pwd}
          placeholder="Type your password"
          onChange={(e) => setPwd(e.target.value)}
        />

        <span className="input-icons">
          {visible ? (
            <AiOutlineEye style={{ fontSize: "35px" }} onClick={togglePwd} />
          ) : (
            <AiOutlineEyeInvisible
              style={{ fontSize: "35px" }}
              onClick={togglePwd}
            />
          )}
        </span>

        <button className="btn-1" onClick = {() => navigate("/explore")}>Sign Up Now</button>

        <button className="btn-2">Sign in with Apple</button>
        <button className="btn-2">Sign in with Google</button>

        <div className="terms">
          <input
            type="radio"
            name="terms"
            value={terms}
            id="terms"
            checked={check}
            onClick={toggleCheck}
          />
          <label htmlFor="terms">
            By clicking the following, you are agreeing to our Terms and
            Conditions.
          </label>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
