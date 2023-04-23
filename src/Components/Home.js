import React from "react";
import { Link } from "react-router-dom";
import "../index.css"
import ND from "../ND.mp4";
export default function Home() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="navbar-brand" id="custom-b">
                        <img src="https://i.pinimg.com/originals/75/78/92/7578920f3e058cad83bff4f0e42f598b.png" alt="Logo of University of Notre Dame" width="30" height="24" class="d-inline-block align-text-top" />
                        &nbsp;Shop and Sell like a Champion Today
                    </div>
                </div>

                <div id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/auth/login">
                                <button type="button" class="btn btn-outline-primary" id="custom-button">Log In</button>
                            </Link>
                        </li>
                        &nbsp;
                        <Link to="/auth/register">
                            <button type="button" class="btn btn-outline-primary" id="custom-button">Register</button>
                        </Link>
                    </ul>
                </div>
            </nav>
            <div class="hero">
                
                <video autoPlay loop muted playsInline class="back-video">
                    <source src={ND} type="video/mp4"/>
                </video>
                <h1 class="title">Tri-Campus Secondhand Marketplace</h1>
            </div>

        </div>
    );
}
