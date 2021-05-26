/* eslint-disable no-unreachable */
import React from 'react';

function Logout(props) {

    return (
        <div>
            <button className="sign-up-btn rounded-pill" onClick={props.logoutHandler}>Logout</button>
        </div>
    )
}

export default Logout;