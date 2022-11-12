import React, {useState} from "react";
import Navigation from "../components/Navigation";

const Account = () => {

    const [signOut, setSignOut] = useState(false)

  return (
    <div className= "account">
      <div className="profile">
        <div className="block1">
          <h2>Account</h2>
        </div>
        <div className="block2" onClick= {() => setSignOut(true)}>
          <h2>Sign Out</h2>
        </div>
      </div>

      <div className="acc-details">
        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <h3>Nirma Azelea</h3>
      </div>

      <div className="stay-details">
        <div className="percentage">75%</div>
        <div className= "more-deatils">
          <div className= "visits">
            <h3>12</h3>
            <p>Staycation visited</p>
          </div>
          <div className= "reviews">
            <h3>10</h3>
            <p>Reviews given</p>
          </div>
        </div>
      </div>

      <h4>Favourites</h4>

      <div className="fav">
        <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <h3>Pullman Bali Legian Beach</h3>
        <p>Grand Deluks Double with Private</p>
      </div>

      {signOut && <div className = "dialogue">
        <h2>Sign Out</h2>
        <p>Are you sure you want to sign out</p>
        <button className= "sign-out">Sign Out</button>
        <button className= "cancel" onClick= {() => setSignOut(false)}>Cancel</button>
      </div>}

      <Navigation/>
    </div>
  );
};

export default Account;
