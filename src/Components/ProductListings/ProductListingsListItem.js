import React from "react";
import {deleteProductListing} from "../../Services/ProductListingService.js";
export default function ProductListingsListItem(props){

    // Display props: console.log(props);
    const deleteListing = () =>{
        deleteProductListing(props.objectId);
    }

    return (
        <div>
            Seller: {props.sellerName} ({props.sellerEmail})
            <br></br>
            Product: {props.productName} - ${props.price}
            &nbsp;<button onClick={deleteListing}>Delete this listing</button>
        </div>
    )
}

