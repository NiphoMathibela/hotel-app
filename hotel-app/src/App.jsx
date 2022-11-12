import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding1 from "./pages/Onboarding1";
import Onboarding2 from "./pages/Onboarding2";
import Onboarding3 from "./pages/Onboarding3";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ExplorePage from "./pages/ExplorePage";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
import MyBooking from "./pages/MyBooking";
import Account from "./pages/Account";
import Navigation from "./components/Navigation";
import UserContextProvider from "./contexts/UserContext";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Onboarding1 />} />
            {/* <Route index element={<Home />} /> */}
            <Route path="onboard2" element={<Onboarding2 />} />
            <Route path="onboard3" element={<Onboarding3 />} />
            <Route path="login" element={<Login />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route path="explore" element={<ExplorePage/>} />
            <Route path="signup" element={<SignUp/>} />
            <Route path="search" element={<Search/>} />
            <Route path="booking" element={<MyBooking/>} />
            <Route path="account" element={<Account/>} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </UserContextProvider>
  );
}

export default App;
