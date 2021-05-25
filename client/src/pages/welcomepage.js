import React,  { useState } from 'react';
import Popup from "../components/PopUp/PopUp";
import { Link } from 'react-router-dom';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
// import Logout from '../components/Logout/Logout';


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
                    Here at EA we strive to make access to EV charging stations easy...etc.etc..
                </p>
                {/* maybe do an ocClick?? */}
                <Link to="/login" >
                <button  className="sign-in-btn rounded-pill">Sign In</button>
                </Link>
                <Link to="/signup" >
            <button className="sign-up-btn rounded-pill">Sign Up</button>
                </Link>
                {/* <Logout /> */}
               
           </header>

        </div>
    )
}

export default WelcomePage;