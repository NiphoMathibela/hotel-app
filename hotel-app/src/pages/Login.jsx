import { React, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import "./Login.css";

const Login = () => {
  const { email, setEmail, pwd, setPwd, visible, setVisible, type, setType } =
    useContext(UserContext);
  let navigate = useNavigate();

  const login = () => {
    if (email !== "" && pwd !== "") {
      navigate("/explore");
    }
  };

  const togglePwd = () => {
    setVisible((prev) => !prev);

    setType(visible ? "text" : "password");
  };

  return (
    <div className="login">
      <div className="login-header">
        <h1>Sign in with Email</h1>
        <p>Input your brainy account!</p>
      </div>

      <form>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          placeholder="Type your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <div>
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
        </div>

        <div className="forgot-pwd">
          <p onClick={() => navigate("/forgotpassword")}>
            Forgot your password?
          </p>
        </div>

        <button className="btn-1" onClick={login}>
          Sign in Now
        </button>

        <button className="btn-2">Sign in with Apple</button>
        <button className="btn-2">Sign in with Google</button>

        <div className="sign-up-btn">
          <p onClick={() => navigate("/signup")}>
            New to Brainy? <span>Sign up here</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
