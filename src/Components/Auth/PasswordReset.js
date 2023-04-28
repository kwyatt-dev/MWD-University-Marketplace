import React from "react";
import { resetPassword } from "./AuthService";
import { useParams, Link } from "react-router-dom";
import "../../index.css";

export default function PasswordReset(){

    const {email} = useParams();

    const handleClick = (e) => {
        e.preventDefault();
        resetPassword(email);
    }
    return(
        <div className="form-group">
            <br />
            <button type="submit" className="btn btn-primary" id="reset-btn" onClick={handleClick}>Reset Your Password</button>
            <div id="auth-redirect">
            <Link to="/auth/login">Go back</Link>
            </div>
        </div>
    )
};