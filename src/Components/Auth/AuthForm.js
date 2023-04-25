import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
const AuthForm = ({ user, isLogin, onChange, onSubmit }) => {

    return (
        <div>
            <div class="container-fluid">
                <div class="navbar-brand" id="custom-b">
                    <img src="https://i.pinimg.com/originals/75/78/92/7578920f3e058cad83bff4f0e42f598b.png" alt="Logo of University of Notre Dame" width="30" height="24" class="d-inline-block align-text-top" />
                    &nbsp;Shop and Sell like a Champion Today
                </div>
            </div>
            <br />
            <form onSubmit={onSubmit} autoComplete="off">
                {!isLogin ?
                    <div className="auth-title">
                        <h2>Create an Account</h2>
                        <br />
                    </div>
                    : <div className="auth-title">
                        <h2>Log In</h2>
                        <br />
                    </div>}
                {!isLogin ?
                <div>
                    
                <div className="form-group">
                    <label>First Name</label>
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        id="first-name-input"
                        value={user.firstName}
                        onChange={onChange}
                        name="firstName"
                        placeholder="first name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        id="last-name-input"
                        value={user.lastName}
                        onChange={onChange}
                        name="lastName"
                        placeholder="last name"
                        required
                    />
                </div>
                </div>
                : <></>}
                <div>
                    <div className="form-group">
                        <label for="exampleInputEmail1" class="form-label">Email/Username</label>
                        <br />
                        <input
                            type="email"
                            className="form-control"
                            id="email-input"
                            value={user.email}
                            onChange={onChange}
                            name="email"
                            placeholder="email/username"
                            required
                        />
                    </div>{" "}
                    <div className="form-group">
                        <label>Password</label>
                        <br />
                        <input
                            type="password"
                            className="form-control"
                            id="password-input"
                            value={user.password}
                            onChange={onChange}
                            name="password"
                            placeholder="password"
                            min="0"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <br />
                        
                        <button type="submit" className="btn btn-primary" id="auth-button" onSubmit={onSubmit}>
                            Submit
                        </button>
                        {!isLogin ? <div id="auth-redirect"><Link to="/auth/login">Already have an account?</Link></div> : <div id="auth-redirect"><Link to={`/auth/reset/${user.email}`}>Forgot your password?</Link></div>}
                        <br></br>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AuthForm;