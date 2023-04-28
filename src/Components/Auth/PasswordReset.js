import React from "react";
import { resetPassword } from "./AuthService";
import { useParams, Link } from "react-router-dom";
export default function PasswordReset(){

    const {email} = useParams();
    return(
        <div>
            <button type="submit" className="btn btn-primary" onSubmit={resetPassword(email)}>Reset Your Password</button>
            <Link to="/auth/login">Go back</Link>
        </div>
    )
};