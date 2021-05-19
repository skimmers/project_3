import React, { Component, useState } from "react";
// import Login from "../Login/Login";
import "./signup.css";
// import Popup from "../PopUp/PopUp";
import axios from "axios";




function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        console.log("username is " + firstName);
        console.log("password is " + lastName);
        console.log("password is " + email);
        console.log("password is " + password);
        return axios.post("/api/signup", { firstName, lastName, email, password });

      };
   
    
        return (
            <form className="form" onSubmit={handleSubmit}>
             <h4>Sign up</h4>
                <div className="form-group">
               
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={e => setFirstName(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name"onChange={e => setLastName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    {/* Already registered? <button onClick={() => setSignupForm(true)}>sign in</button> */}
          
                </p>
            </form>
        );
    }


export default SignUp;