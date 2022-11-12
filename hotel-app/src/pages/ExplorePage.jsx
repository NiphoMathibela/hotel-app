import { React, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineSearch, AiFillStar} from "react-icons/ai";
import "./Explore.css"
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import Navigation from "../components/Navigation";

const ExplorePage = () => {
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
    <div className="explore">
      <div className="header">
        <h1>Explore</h1>
        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
      </div>

      <div className = "searchBar"> <button onClick = {search}><AiOutlineSearch style={{ fontSize: "30px" }}/></button> <input type = "text" value= {searchTerm} placeholder= "Seacrh a hotel" onChange= {(e) => setSearchTerm(e.target.value)}/></div>
      {nearby}
      <Navigation/>
    </div>
  );
};

export default ExplorePage;
