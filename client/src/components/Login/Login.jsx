/* eslint-disable react/jsx-no-comment-textnodes */
import React, {useState} from 'react';
import "./login.css";
    
    function Login(props) {
        const [state , setState] = useState({
            email : "",
            password : ""
        })
        const handleChange = (e) => {
            const {id , value} = e.target   
            setState(prevState => ({
                ...prevState,
                [id] : value
            }))
        }
        return (
            <form>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" 
                    className="form-control" 
                    placeholder="Enter email"
                    value={state.email}
                    onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                     className="form-control"
                     placeholder="Enter password"
                     value={state.password}
                     onChange={handleChange} 
                      />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                // eslint-disable-next-line react/jsx-no-comment-textnodes
                <p className="forgot-password text-right">
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }

export default Login;