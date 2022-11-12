import { React, useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router";
import "./Login.css";

const ForgotPassword = () => {
  const { email, setEmail, pwd, setPwd, phoneNum, setPhoneNum } = useContext(UserContext);
  const [resetType, setResetType] = useState("email")
  const [viaEmail, setViaEmail] = useState(true)
  const [msg, setMsg] = useState("")

  const navigate = useNavigate();

  const toggleReset = () => {
    setViaEmail(prev => !prev)
  };

  const sendLink = (e) => {
    e.preventDefault()

    setMsg("Sent successfully")

    setTimeout(() => {
      navigate("/login")
    }, 5000)
  }

  return (
    <div className="login">
      <div className="back-btn">
        <button className="icon-btn" onClick={() => navigate(-1)}>
          <AiOutlineArrowLeft style={{ fontSize: "35px" }} />
        </button>
      </div>

      <div className="login-header">
        <h1>Forgot Password?</h1>
        <p>Please select option to send link to reset password.</p>
      </div>

      <form>
        {msg ? <div>{msg}</div> : ""}

        {viaEmail ? <div> <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          placeholder="Type your email"
        /></div> :  <div><label htmlFor="phoneNum">Phone Number</label>
        <input
          id="phoneNum"
          name="phoneNum"
          value={phoneNum}
          type="text"
          maxLength={10}
          minLength={10}
          placeholder="Type your phone number"
          onChange={(e) => setPhoneNum(e.target.value)}
        /></div>}
        

       

        <button className="btn-1" onClick = {sendLink}>Send Link</button>

        <label htmlFor="resetType">Send via Email</label>
        <input
          type="radio"
          value="email"
          id="resetType"
          name="resetType"
          onChange={(e) => setResetType(e.target.value)}
          className = "reset-radio"
          onClick = {toggleReset}
        />
        <label htmlFor="resetType">Send via Phone Number</label>
        <input
          type="radio"
          value="phoneNum"
          id="resetType"
          name="resetType"
          onChange={(e) => setResetType(e.target.value)}
          className = "reset-radio"
          onClick = {toggleReset}
        />
      </form>
    </div>
  );
};

export default ForgotPassword;
