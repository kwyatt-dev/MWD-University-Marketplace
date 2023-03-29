import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div>
            <h1>Tri-campus Second-hand Marketplace</h1>
            <p>Welcome & Go Irish</p>
            <Link to="/auth/login">
                <button>
                    Login
                </button>
            </Link>
            <Link to="/auth/register">
                <button>
                    Register
                </button>
            </Link>
        </div>
    );
}
