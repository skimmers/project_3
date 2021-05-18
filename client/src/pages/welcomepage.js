import React from 'react';
import Popup from "../components/PopUp/PopUp";
import { useState } from 'react';
// import Login from '../components/Login/Login';
// import Signup from '../components/Signup/Signup';


function WelcomePage() {
// this is for the popup so it can change its state and work
    const [buttonPopup, setButtonPopup] = useState(false);
 

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
                <button onClick={() => setButtonPopup(true)} className="get-started-btn rounded-pill">Get Started</button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    {/* <Login /> */}
                    {/* <Signup /> */}
                    {/* need to add CSS to this we are also working on connecting the auth key */}
                </Popup>
           </header>

        </div>
    )
}

export default WelcomePage;