import { React, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineSearch, AiFillStar,AiOutlineArrowLeft, AiOutlineWifi} from "react-icons/ai";
import { ImLocation} from "react-icons/im";
import {MdOutlineBed} from "react-icons/md";
import {TbDimensions} from "react-icons/tb";
import {BsPeopleFill} from "react-icons/bs";
import "./Explore.css"
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import Navigation from "../components/Navigation";
import BookingDetails from "../components/BookingDetails"

const HotelDetail = () => {
  const { email, setEmail, pwd, setPwd, visible, setVisible, type, setType, searchTerm, setSearchTerm, hotels } =
    useContext(UserContext);

    const navigate = useNavigate()

    const search = () => {
      navigate("/search")
    }

    const nearby = hotels.map(item => <div className = "nearby">
      <div className= "img-box">
      <img src= {item.backImg}/>
      </div>
      <div className= "details">
      <h3>{item.hotelName}</h3>
      <p>Start from ${item.price} per night</p> <span><AiFillStar style= {{color: "yellow", fontSize: "25px"}}/>{item.rating}</span>
      </div>
    </div>)

  return (
    <div className="hotel-detail">
        <div className="back-btn">
        <button className="icon-btn" onClick={() => navigate("/explore")}>
          <AiOutlineArrowLeft style={{ fontSize: "35px" }} />
        </button>
      </div>

      <div className="fav">
        <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <h3>Pullman Bali Legian Beach</h3>
        <p>Grand Deluks Double with Private</p>
        <div className= "location" onClick= {() => navigate("/map")}><ImLocation style={{ fontSize: "35px", color: "blue" }}/> Jarkarta</div>
        <div><span><MdOutlineBed style={{ fontSize: "35px", color: "blue" }}/> 1 Double</span>  <span><BsPeopleFill style={{ fontSize: "35px", color: "blue" }}/> 2 Guests</span>  </div>
        <div><span><AiOutlineWifi style={{ fontSize: "35px", color: "blue" }}/> WiFi</span>  <span><TbDimensions style={{ fontSize: "35px", color: "blue" }}/> 150m2</span>  </div>
        <button className="btn-1" onClick={() => navigate("/selectroom")}>Check Availabillity</button>
      </div>
    </div>
  );
};

export default HotelDetail;
