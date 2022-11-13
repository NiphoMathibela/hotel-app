import { React, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineSearch, AiFillStar,AiOutlineArrowLeft, AiOutlineWifi} from "react-icons/ai";
import { ImLocation} from "react-icons/im";
import {MdOutlineBed} from "react-icons/md";
import {TbDimensions} from "react-icons/tb";
import {BsPeopleFill} from "react-icons/bs";
import {TiTick} from "react-icons/ti";
import "./Explore.css"
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import Navigation from "../components/Navigation";
import BookingDetails from "../components/BookingDetails"

const BookSuccess = () => {
  const { email, setEmail, pwd, setPwd, visible, setVisible, type, setType, searchTerm, setSearchTerm, hotels } =
    useContext(UserContext);

    const navigate = useNavigate()

  return (
    <div className="success">

        <div className= "tick"><TiTick style= {{fontSize: "60px", color: "blue"}}/></div>
        <p>Booking Success</p>

        <button className= "btn-1" onClick= {() => navigate("/explore")}>Back to Home</button>
    </div>
  );
};

export default BookSuccess;
