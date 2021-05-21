import React from 'react';
import avatar from '../../images/charging-station-icon-9.jpg';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="EV Logo" />
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                         </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/map" exact activeClassName="active">
                            Map Page
                         </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/favorites" exact activeClassName="active">
                            Favorites
                         </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/search" exact activeClassName="active">
                            Search
                         </NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink to="/login" exact activeClassName="active">
                            Login
                         </NavLink>
                    </li> */}
                
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