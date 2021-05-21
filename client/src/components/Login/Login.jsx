import React, { useState } from "react";
import axios from "axios";
import './login.css'
import { useHistory } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// this can make the history of the button click take you to a new route.
// but it gets stuck on that page




 function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log("password is " + email);
        console.log("password is " + password);
        return axios.post("/api/login", { email, password});

      };


      const history = useHistory();
     

        // eslint-disable-next-line no-unreachable
        return (
           <form className="form" onSubmit={handleSubmit}>
                <h3>Login</h3>
                <button onClick={() => history.goBack()} className="close-btn">x</button>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"onChange={e => setEmail(e.target.value)}  />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button  type="submit" className="login-btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                </p>
                </form>
        )
    }

export default Login;