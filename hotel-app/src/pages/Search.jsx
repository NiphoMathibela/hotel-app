import { React, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineSearch } from "react-icons/ai";
import "./Explore.css"

const Seacrh = () => {
  const { email, setEmail, pwd, setPwd, visible, setVisible, type, setType, searchTerm, setSearchTerm } =
    useContext(UserContext);

    const navigate = useNavigate()

    const search = () => {
      navigate("/search")
    }
  return (
    <div className="explore">
      <div className="header">
        <h1>Explore</h1>
        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
      </div>

      <div className = "searchBar"> <button onClick = {search}><AiOutlineSearch style={{ fontSize: "30px" }}/></button> <input type = "text" value= {searchTerm} placeholder= "Seacrh a hotel" onChange= {(e) => setSearchTerm(e.target.value)}/></div>
    </div>
  );
};

export default Seacrh;
