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
    const [isLoading, setIsLoading] = useState(true);


    //useEffect(() => {
        // TODO: get user by ID   
        //if (props.user.id) {
        //    getUser("wXpvn9DHoR").then((user) => {
          //      setUser(user);
      //          console.log("User Attr: ", user.attributes);
    //            console.log("User Name: ", user.attributes.username);
  //          });
        //}
//}, []);

    useEffect(() => {
        getUser("wXpvn9DHoR").then((user) => {
            setUser(user);
            console.log("User Attr: ", user.attributes);
            console.log("User Name: ", user.attributes.username); // <- interesting that this works but line 39 breaks
            setIsLoading(false);
        });
    }, []);

    return (
        <div>
            {!isLoading && (
                <div>
                    User Testing: {user.attributes.username}
                    Seller: {props.sellerName} ({props.sellerEmail})
                    <br></br>
                    Product: {props.productName} - ${props.price}
                    &nbsp;<button onClick={deleteListing}>Delete this listing</button>
                </div>
            )}
            
        </div>
    )
}

