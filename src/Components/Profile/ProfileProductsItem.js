import React from "react";
import {deleteProductListing} from "../../Services/ProductListingService.js";
import { useNavigate } from "react-router-dom";


export default function ProductListingsListItem(props){

    const navigate = useNavigate();

    const deleteListing = () =>{
        deleteProductListing(props.objectId);
    }

    const editListing = () =>{
        navigate("/editListing/" + props.objectId);
    }

    // This is the individual listing on a user's profile page
    return (
        <div className="prof-listing-item">
            Product Name: {props.productName}
            <br></br>
            Price: {props.price}
            <br />
            {props.curUser && (
            <button class="btn btn-primary" id="auth-button" onClick={editListing}>Edit</button>)}
            &nbsp;
            {props.curUser && (
            <button class="btn btn-primary" id="auth-button" onClick={deleteListing}>Delete</button>
            )}
        </div>
    )
}

