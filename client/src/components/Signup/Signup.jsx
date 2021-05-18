import React, { Component, useState } from "react";
import Login from "../Login/Login";
import "./signup.css";




function SignUp() {

    const [signupForm, setSignupForm] = useState(false);
    
  
    
        return (
            <form>
             <h4>Sign up</h4>
                <div className="form-group">
               
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered? <button onClick={() => setSignupForm(true)}>sign in</button>
                </p>
            </form>
        );
    }


export default SignUp;