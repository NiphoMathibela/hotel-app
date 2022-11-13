import { React, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../contexts/UserContext";
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineSearch,
  AiFillStar
} from "react-icons/ai";
import "./Explore.css";

const Seacrh = () => {
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
    hotels
  } = useContext(UserContext);

  const navigate = useNavigate();

  const search = () => {
    navigate("/search");
  };

  const nearby = hotels.map(item => <div className = "nearby" onClick= {() => navigate("/hoteldetail")}>
      <div className= "img-box">
      <img src= {item.backImg}/>
      </div>
      <div className= "details">
      <h3>{item.hotelName}</h3>
      <p style= {{color: "red"}}> 5 rooms left</p>
      <p>Start from ${item.price} per night</p> <span><AiFillStar style= {{color: "yellow", fontSize: "25px"}}/>{item.rating}</span>
      </div>
    </div>)

  return (
    <div className="explore">

      <div className="searchBar">
        <button onClick={search}>
          <AiOutlineSearch style={{ fontSize: "30px" }} />
        </button>{" "}
        <input
          type="text"
          value={searchTerm}
          placeholder="Seacrh a hotel"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="cancel-btn">Cancel</button>
      </div>

      <div className= "near-me">
        <div className= "near-block">
          Near me
        </div>

        <div className= "near-block">
          Bandung
        </div>

        <div className= "near-block">
          Raja Ampat
        </div>

        <div className= "near-block">
          Bali
        </div>

        <div className= "near-block">
          Jakarta
        </div>
      </div>

      <h3>Top Searches</h3>
      {nearby}
    </div>
  );
};

export default Seacrh;
