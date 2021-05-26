import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from "../utils/API";
import Container from "../components/Container/Container";
import Logout from "../components/Logout/Logout";
import axios from "axios";

function WelcomePage() {

    const [loggedIn, setLoggedIn] = useState(false);

    const logoutHandler = async () => {
        const res = await axios.post('/api/users/logout');
        console.log(res);
        localStorage.clear();
        setLoggedIn(false);
      }

    useEffect(() => {
        API.checkLoginStatus()
        .then(res => {
            if (res.data.logged_in) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        })
        .catch(e => console.log(e));
    });

    return (
        <Container>
        <div className="WelcomePage container-fluid">
            <header className="hero-header">
                <h1>
                Welcome to <span className="electric">Electric</span><span className="ave">Ave</span>
                </h1> 
                <p className="intro">
                    Here at ElectricAve we strive to make access to EV charging stations easy! No matter where you are in the country.
                </p>
                {/* maybe do an ocClick?? */}
                {loggedIn ? 
                <>
                    <Logout logoutHandler={logoutHandler} />
                </> :
                <>
                    <Link to="/login" >
                    <button  className="sign-in-btn rounded-pill">Sign In</button>
                    </Link>
                    <Link to="/signup" >
                    <button className="sign-up-btn rounded-pill">Sign Up</button>
                    </Link>
                </>
                }
           </header>
        </div>
        </Container>
    )
}

export default WelcomePage;