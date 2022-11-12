import React, {useState, useContext,useEffect} from 'react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { UserContext } from "../contexts/UserContext";
import Banner from "./Banner"


const Slider = (props) => {

    const { hotels } = useContext(UserContext);
    const [slideNum, setSlideNum] = useState(0)
    const [hotelDetails, setHotelDetails] = useState({})

    

    useEffect(() => {
        const next = () => {
            let arryLength = hotels.length
    
            setTimeout(() => {
                let i  = 0;
                while(i < arryLength){
                    setSlideNum(i)
                    let details = hotels[i]
                    setHotelDetails(hotels[i])
                    console.log(details.hotelName)
                    i++
                }
            }, 5000)
        }

        console.log(slideNum)

        next()
    }, [])


  return (
    <div className = "banner">
        <Banner hotelName= {hotelDetails.hotelName} backImg = {hotelDetails.backImg} rating= {hotelDetails.rating} price= {hotelDetails.price} location= {hotelDetails.location} />
    </div>
  )
}

export default Slider