import React, { Component, useState } from "react";
// import Login from "../Login/Login";
import "./signup.css";
// import Popup from "../PopUp/PopUp";
import axios from "axios";
import { useHistory } from "react-router-dom";




function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        console.log("username is " + firstName);
        console.log("password is " + lastName);
        console.log("password is " + email);
        console.log("password is " + password);
        axios.post("/api/users/signup", { firstName, lastName, email, password }).then(res => {
            if (res.status === 200 ) {
                //we signed in succesfully, and the user is now logged in
                history.push("/map");

            } else {
                //we did not log in correctly, OR maybe we'll hit the catch? 
            }
        })
        //this should be hit if we get anythign but a 200
        .catch(e => {
            console.log(e);
            console.log(e.response);
            if (e.response && e.response.data) {
                const errorMessage = e.response.data.message;
                //do something with our error message to tell the user what happened
            }
        });

      };
  

      
        return (
            <form className="form" onSubmit={handleSubmit}>
             <h3>Sign up</h3>
             <button onClick={() => history.goBack()} className="close-btn">x</button>
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

                <button type="submit" className="signin-btn btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    {/* Already registered? <button onClick={() => setSignupForm(true)}>sign in</button> */}
          
                </p>
            </form>
        );
    }


export default SignUp;