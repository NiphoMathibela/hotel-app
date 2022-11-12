import { React, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { AiFillCompass, AiOutlineBook, AiFillBell, AiOutlineUser } from "react-icons/ai";
import "../pages/Explore.css"
import Banner from "../components/Banner";
import Slider from "../components/Slider";

const Navigation = () => {
  const { email, setEmail, pwd, setPwd, visible, setVisible, type, setType, searchTerm, setSearchTerm, hotels } =
    useContext(UserContext);

    const navigate = useNavigate()

  return (
    <div className="nav">
        <div className= "nav-icon" onClick= {() => navigate("/explore")}>
            <AiFillCompass style= {{ fontSize: "35px"}}/>
            <p>Explore</p>
        </div>
        <div className= "nav-icon"onClick= {() => navigate("/booking")}>
            <AiOutlineBook style={{ fontSize: "35px"}}/>
            <p>My booking</p>
        </div>
        <div className= "nav-icon" onClick= {() => navigate("/notification")}>
            <AiFillBell style={{ fontSize: "35px"}}/>
            <p>Notification</p>
        </div>
        <div className= "nav-icon" onClick= {() => navigate("/account")}>
            <AiOutlineUser style={{ fontSize: "35px"}}/>
            <p>Account</p>
        </div>
    </div>
  );
};

export default Navigation;
