import React, {useState, useEffect} from "react";
import {deleteProductListing} from "../../Services/ProductListingService.js";
import { getUser } from "../../Services/UserService.js";
export default function ProductListingsListItem(props){

    // Display props: 
    //console.log(props.user.id);
    const deleteListing = () =>{
        deleteProductListing(props.objectId);
    }

    // getUser usage
    const [user, setUser] = useState([]);

    useEffect(() => {
        // TODO: get user by ID   
        if (props.user.id) {
            getUser(props.user.id).then((user) => {
                setUser(user);
                console.log(user.attributes);
            });
        }
}, []);
    return (
        <div>
            {/* TODO: fix this in F5 */}
            {user.length > 0 && user.attributes.username} 
            Seller: {props.sellerName} ({props.sellerEmail})
            <br></br>
            Product: {props.productName} - ${props.price}
            &nbsp;<button onClick={deleteListing}>Delete this listing</button>
        </div>
    )
}

