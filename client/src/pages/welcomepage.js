import React,  { useState } from 'react';
import Popup from "../components/PopUp/PopUp";
import { Link } from 'react-router-dom';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';


function WelcomePage() {
// this is for the popup so it can change its state and work
    // const [buttonPopup, setButtonPopup] = useState(false);
    // const [signupForm, setSignupForm] = useState(false);
 

    return (
        <div className="WelcomePage">
            <header className="hero-header">
                <h1>
                Welcome to <span className="electric">Electric</span><span className="ave">Ave</span>
                </h1> 
                <p className="intro">
                    Here at ElectricAve we strive to make access to EV charging stations easy! No matter where you are in the country.
                </p>
                {/* maybe do an ocClick?? */}
                <Link to="/login" >
                <button  className="sign-in-btn rounded-pill">Sign In</button>
                </Link>
                <Link to="/signup" >
            <button className="sign-up-btn rounded-pill">Sign Up</button>
                </Link>
           
           </header>

        </div>
    )
}

export default WelcomePage;