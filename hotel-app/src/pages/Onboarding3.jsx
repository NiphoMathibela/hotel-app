import React from "react"
import "./Onboarding.css"
import {useNavigate} from "react-router"

const Onboarding3 = () => {

    const redirect = useNavigate()

    const btnClick = () => {
      redirect("/login")
    }
  return(
    <div className = "Onboard3">
      <p>You will not be disappointed by our features.</p>
      <div className = "button-box">
        <div className = "page-dot"></div>
        <button className = "skip-btn" onClick ={btnClick}>Skip</button>
      </div>
    </div>
  )
}

export default Onboarding3