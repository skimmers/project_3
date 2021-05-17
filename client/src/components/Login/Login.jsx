/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
// import "../../App.css";


class Login extends Component {
    render() {
        return (
            <form>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}

export default Login;