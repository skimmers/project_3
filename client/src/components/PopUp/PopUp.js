import React from 'react';
// import "../../styles/popup";


function Popup(props){
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn">
                   close
                </button>
                {props.children}
            </div>
        </div>
    ): "";
}

export default Popup;