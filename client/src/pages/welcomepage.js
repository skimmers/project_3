import React from 'react';

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
                <button className="get-started-btn rounded-pill">Get Started</button>
           </header>

        </div>
    )
}

export default WelcomePage;