import React from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";
import Home from "../Home";
import ProductListingsModule from "../ProductListings/ProductListings.js";
// You can pass props using the spread operator to throw them on an object if there are too many to break out
export const ProtectedRoute = ({ element: Component, ...rest }) => {
    console.log("element: ", Component);
    const navigate = useNavigate();
    const goBackHandler = () => {
        navigate("/auth");
    };
    if (checkUser()) {
        return <Component />;
    } else {
        return <Home />;
            // <div>
            //     <p>Unauthorized!</p> <button onClick={goBackHandler}>Go Back.</button>
            // </div>
    }
};

export const ProtectedAuthRoute = ({ element: Component, ...rest }) => {
    console.log("element: ", Component);
    const navigate = useNavigate();
    // const goBackHandler = () => {
    //     navigate("/auth");
    // };
    if (!checkUser()) {
        return <Component />;
    } else {
        console.log("User's logged in. ");
        return <ProductListingsModule />;
        // TODO: Get rid of "auth" in URL
            // <div>
            //     <p>Unauthorized!</p> <button onClick={goBackHandler}>Go Back.</button>
            // </div>
    }
};
