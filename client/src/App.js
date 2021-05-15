import './App.scss';
import NavBar from './components/Navbar/NavBar';
import HomePage from '../src/pages/HomePage';
import WelcomePage from '../src/pages/WelcomePage';
import LoginPage from '../src/pages/LoginPage';
import SignUp from './pages/SignUpPage';
import SearchBar from './components/SearchBar/SearchBar';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';


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
            <Route path="/login" exact>
              <LoginPage />
            </Route>
            <Route path="/signup" exact>
              <SignUp />
            </Route>
            <Route path="/homepage" exact>
              <SearchBar placeholder="Enter Location" handleChange={(e) => console.log("This" + e.target)} />
              {/* we will get value from the target in the console log I think... */}
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;