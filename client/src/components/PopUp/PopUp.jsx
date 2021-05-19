import React from 'react';
import "./popup.css";
//import Signup from "../Signup/Signup";
import StationInfo from '../MarkerPopup/MarkerPopup';






function Popup(props) {

    return (props.trigger) ? (
        <div className="back-drop">
            <div className="login-register-wrapper">
                <div className="nav-buttons">
                    <button onClick={() => props.setTrigger(false)} className="close-btn">
                        x
                    </button>
                    {/* for loops to go through the array res.data[i].address */}
                    
                    {props.children}
                </div>
         
            </div>
        </div>
    ) : "";
}

export default Popup;