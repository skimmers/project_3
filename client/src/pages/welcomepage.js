import React from 'react';
import { Link } from 'react-router-dom';


function WelcomePage() {
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
           </header>

        </div>
    )
}

export default WelcomePage;