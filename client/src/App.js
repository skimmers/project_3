import './App.scss';
import NavBar from './components/Navbar/NavBar';
import Map from '../src/pages/homepage';
import WelcomePage from '../src/pages/welcomepage';
// import LoginPage from '../src/pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import SearchBar from './components/SearchBar/SearchBar';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
// import Popup from './components/PopUp/PopUp'

function App() {
  const [navToggle, setNavToggle] = useState(false);


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
            {/* <Route path="/login" exact>
              <LoginPage />
            </Route>
            <Route path="/signup" exact>
              <SignUpPage />
            </Route> */}
            <Route path="/map" exact>
              <Map />
            </Route>
          </Switch>
        </div>
      </div>

    </div>
  );
}

export default App;