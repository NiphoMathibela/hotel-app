import React from "react";

const HistoryDetails = (props) => {
  return (
    <div className="booking-history">
      <div className="img-box">
        <img src={props.backImg} />
      </div>
      <div className="details">
        <h3>{props.hotelName}</h3>
        <p>Start from ${props.price} per night</p>
        <span>
          <AiFillStar style={{ color: "yellow", fontSize: "25px" }} />
          {props.rating}
        </span>
        <p>
        <MdOutlineBedroomParent style={{ color: "blue", fontSize: "25px" }} /> 1
        room, 2 Adults
      </p>
      <div>
        <div>
          <p>Check-in</p>
          <h3>Thu, 25 Feb 22</h3>
        </div>
        <div>
          <p>Check-out</p>
          <h3>Sat, 27 Feb 22</h3>
        </div>
        </div>
        <button className="btn-1">Details</button>
      </div>
    </div>
  );
};

export default HistoryDetails;
