import React from 'react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Banner = (props) => {
  return (
    <div className = "banner">
        <div className = "info-div" style={{backgroundImg: `${props.backImg}`}}>
            <span>{props.rating}</span> <span>{props.location}</span>
            <p>{props.hotelName}</p>
            <p>Start from ${props.price} per night</p>
            <span><AiOutlineHeart/></span>
        </div>
    </div>
  )
}

export default Banner