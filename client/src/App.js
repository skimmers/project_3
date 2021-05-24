import './App.scss';
import NavBar from './components/Navbar/NavBar';
import Map from '../src/pages/homepage';
import WelcomePage from '../src/pages/welcomepage';
import StationInfo from './components/Favorites/Favorites';
import Login from './components/Login/Login';
import FavoritesPage from "../src/pages/FavoritesPage";
import {  Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import SearchPage from '../src/pages/SearchPage.js';
import Signup from './components/Signup/Signup';
import Map2 from './components/Map2.js'
import axios from 'axios';


function App() {
  const [navToggle, setNavToggle] = useState(false);

  // axios.defaults.proxy.host = "http://localhost:3001";
  // axios.defaults.baseURL = "http://localhost:3001";
  console.log(axios.defaults.baseURL)


  const navClick = () => {
    setNavToggle(!navToggle);
  }
  return (
    <div className="App">
      {/* this is changing the class of the hamburger when clicked */}
      <div className={ `sidebar ${navToggle ? 'nav-toggle': "" }`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
     
          <Switch>
            <Route path="/" exact>
              <WelcomePage />
            </Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/signup" exact component={Signup}></Route>
            <Route path="/favorites" exact>
              <FavoritesPage />
            </Route>
            <Route path="/map" exact>
              <Map />
            </Route>
            {/* <Route path="/search" exact>
              <SearchPage />
            </Route> */}
          </Switch>

        </div>
      </div>

    </div>
  );
}

export default App;