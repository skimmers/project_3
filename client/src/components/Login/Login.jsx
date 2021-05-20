import React, { useState } from "react";
import axios from "axios";




 function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log("password is " + email);
        console.log("password is " + password);
        return axios.post("/api/users/login", { email, password});

      };

        // eslint-disable-next-line no-unreachable
        return (
           <form className="form" onSubmit={handleSubmit}>
                <h3>Login</h3>

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

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                </p>
                </form>
        )
    }

export default Login;