import React, {useState, useEffect} from "react";
import {deleteProductListing} from "../../Services/ProductListingService.js";
import { getUser } from "../../Services/UserService.js";
import { useNavigate } from "react-router-dom";


export default function ProductListingsListItem(props){

    const navigate = useNavigate();

    // Display props: 
    //console.log(props.user.id);
    const deleteListing = () =>{
        deleteProductListing(props.objectId);
    }

    const editListing = () =>{
        navigate("/editListing/" + props.objectId);
    }

    

    // getUser usage
    //const [user, setUser] = useState([]);
    //const [isLoading, setIsLoading] = useState(true);


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

    // useEffect(() => {
    //     getUser("wXpvn9DHoR").then((user) => {
    //         setUser(user);
    //         console.log("User Attr: ", user.attributes);
    //         console.log("User Name: ", user.attributes.username); // <- interesting that this works but line 39 breaks
    //         setIsLoading(false);
    //     });
    // }, []);

    return (
        <div>
            Product Name: {props.productName}
            <br></br>
            Price: {props.price}
            {props.curUser && (
            <button onClick={editListing}>Edit</button>)}
            {props.curUser && (
            <button onClick={deleteListing}>Delete</button>
            )}
        </div>
    )
}

