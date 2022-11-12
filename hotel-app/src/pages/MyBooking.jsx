import React, {useState} from "react"
import BookingDetails from "../components/BookingDetails"
import HistoryDetails from "../components/HistoryDetails"
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineSearch, AiFillStar} from "react-icons/ai";
import Navigation from "../components/Navigation";


const MyBooking = () => {

    const [upcoming, setUpcoming] = useState(true)
    const [history, setHistory] = useState(false)

    const toggleView = (e) => {
        e.preventDefault()
        setUpcoming(true)
        setHistory(false)
    }

    const toggleView2 = (e) => {
        e.preventDefault()
        setUpcoming(false)
        setHistory(true)
    }

    const style = upcoming ? "white" : "transparent";
    const style2 = history ? "white" : "transparent";

    const historyArry = [
        {
            id: 1,
            backImg: "https://images.unsplash.com/photo-1546484488-2a1430996887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
            hotelName: "The Lawn",
            rating: 4.9,
            price: 100,
            location: "Cannuga"
          },
          {
            id: 2,
            backImg: "https://images.unsplash.com/photo-1540544660406-6a69dacb2804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBpbiUyMGJhbGl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            hotelName: "Citadenes Berawa",
            rating: 4.0,
            price: 130,
            location: "Bandung"
          }
    ]

    const historyList = historyArry.map(item => <div className = "nearby">
    <div className= "img-box">
    <img src= {item.backImg}/>
    </div>
    <div className= "details">
    <h3>{item.hotelName}</h3>
    <p>Start from ${item.price} per night</p> <span><AiFillStar style= {{color: "yellow", fontSize: "25px"}}/>{item.rating}</span>
    </div>
  </div>)
    return(                
        <div className= "bookings">
            <h1>My Booking</h1>
            <div className= "toggle">
                <button style = {{backgroundColor: {style}}} onClick= {toggleView}>
                    Upcoming
                </button>
                <button style = {{backgroundColor: {style2}}} onClick= {toggleView2}>
                    History
                </button>
            </div>

            {
                upcoming ? <BookingDetails/> : {historyList}
            }

            <Navigation/>
        </div>
    )
}

export default MyBooking;