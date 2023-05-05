import React from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";
import Home from "../Home";
import ProductListingsModule from "../ProductListings/ProductListings.js";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
// General Protected Route (protecting unauthorized people from reaching authorized pages)
export const ProtectedRoute = ({ element: Component, ...rest }) => {
    
    console.log("element: ", Component);
    const navigate = useNavigate();

    // If user is logged in
    if (checkUser()) {
        console.log("check user true");
        console.log(rest.path);
        return <Component />;
    } else {
        return <Home />;
    }
};

// Auth Protected Route (protecting authorized people from reaching unauthorized pages)
export const ProtectedAuthRoute = ({ element: Component, ...rest }) => {
    console.log("element: ", Component);

    if (!checkUser()) {
        return <Component />;
    } else {
        console.log("User's logged in. ");
        return <ProductListingsModule />;
    }
};
