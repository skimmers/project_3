import React from 'react';
import avatar from '../../images/electric-car.svg';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="Arash Saeedi" />
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                         </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/signup" exact activeClassName="active">
                            Sign Up
                         </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login" exact activeClassName="active">
                            Login
                         </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/homepage" exact activeClassName="active">
                            Map Page
                         </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>
                        @2021 Team Name
                    </p>
                </footer>
            </nav>
        </div>
    )
}

export default NavBar;