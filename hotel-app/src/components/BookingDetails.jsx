import React from "react";
import { MdOutlineBedroomParent } from "react-icons/md";

const BookingDetails = () => {
  return (
    <div className="bookings-details">
      <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      <h3>Pullman Bali Legian Beach</h3>
      <p>Grand Deluks Double with Private</p>
      <p>Pool</p>
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
      <button className="btn-1">
        Details
      </button>
    </div>
  );
};

export default BookingDetails;
