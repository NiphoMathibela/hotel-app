import React from "react"
import "./Onboarding.css"
import {useNavigate} from "react-router"

const Onboarding2 = () => {

    const redirect = useNavigate()

    const btnClick = () => {
      redirect("/onboard3")
    }
  return(
    <div className = "Onboard2">
      <h1>Find The Best Place To Stay</h1>
      <p>The largest platfrom to find staycations in Indonesia.</p>
      <div className = "button-box">
        <div className = "page-dot"></div>
        <button className = "skip-btn" onClick ={btnClick}>Skip</button>
      </div>
    </div>
  )
}

export default Onboarding2