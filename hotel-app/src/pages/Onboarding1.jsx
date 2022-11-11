import React from "react"
import "./Onboarding.css"
import {useNavigate} from "react-router"

const Onboarding1 = () => {
  const redirect = useNavigate()

  const btnClick = () => {
    redirect("/onboard2")
  }
  return(
    <div className = "Onboard1">
      <h1>Luxury and Classy Hotels</h1>
      <p>The best quality hotels and staycations with curated international standards.</p>
      <div className = "button-box">
        <div className = "page-dot"></div>
        <button className = "skip-btn" onClick ={btnClick}>Skip</button>
      </div>
    </div>
  )
}

export default Onboarding1