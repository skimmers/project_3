import React, { useState } from "react";
import axios from "axios";
import './login.css'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

 function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        console.log("password is " + email);
        console.log("password is " + password);
        return axios.post("/api/users/login", { email, password})
        .then(res => {
            if (res.status === 200) {
                // if login successful, redirect user to map page
                history.push("/map");
            }
        })
        // Hit the catch block if we get anything but a 200 status
        .catch(e => {
            console.log(e.response);
            if (e.response && e.response.data) {
                // alert the user to the error
                const errorMessage = e.response.data.message;
                alert(errorMessage);
            }
        });

      };

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

             <button  type="submit" className="login-btn  btn-block">Submit</button>
             <p className="forgot-password text-right">
             </p>
             <Link to="/signup">
             <button  type="link" className="login-btn  btn-block">Sign Up</button>
             </Link>
        </form>
    )
    }

export default Login;