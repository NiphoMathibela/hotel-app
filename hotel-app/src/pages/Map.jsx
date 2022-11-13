import { React, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../contexts/UserContext";
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineSearch,
  AiFillStar,
  AiOutlineArrowLeft,
  AiOutlineWifi,
  AiOutlineCalendar,
} from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { MdOutlineBed, MdMeetingRoom } from "react-icons/md";
import { TbDimensions } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { FaArrowsAltH } from "react-icons/fa";
import "./Explore.css";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import Navigation from "../components/Navigation";
import BookingDetails from "../components/BookingDetails";

const Map = () => {
  const {
    email,
    setEmail,
    pwd,
    setPwd,
    visible,
    setVisible,
    type,
    setType,
    searchTerm,
    setSearchTerm,
    hotels,
  } = useContext(UserContext);

  const navigate = useNavigate();
  const [changes, setChanges] = useState(false);

  const change = () => {
    setChanges(true);
  };

  const saveChange = () => {
    setChanges(false);
  };

  return (
    <div className="map">
        <div className="back-btn">
        <button className="icon-btn" onClick={() => navigate("/hoteldetail")}>
          <AiOutlineArrowLeft style={{ fontSize: "35px", color: "blue" }} />
        </button>
      </div>


    <div className= "bottom">
    <div className= "nearby">
      <div className= "img-box">
      <img src= "https://images.unsplash.com/photo-1527246201253-ce566026066e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
      </div>
      <div className= "details">
      <h3>Double Six Luxury</h3>
      <p><FaArrowsAltH style={{ fontSize: "35px", color: "blue" }}/> 14.3 km</p>
      <p>Start from $120 per night</p> <span><AiFillStar style= {{color: "yellow", fontSize: "25px"}}/>4.9</span>
      </div>
      </div>

      <button className= "btn-1">Start Direction</button>
    </div>


        

    </div>
  );
};

export default Map;
