import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../Services/UserService.js";


export default function ProductListingsListItem(props){

    // Display props: 
    //console.log(props.user.id);

    // getUser usage
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getUser("wXpvn9DHoR").then((user) => {
            setUser(user);
            console.log("User Attr: ", user.attributes);
            console.log("User Name: ", user.attributes.username);
            setIsLoading(false);
        });
    }, []);

    return (
        <div>
            {!isLoading && (
                <div className="ind-list">
                    Product and Condition: {props.productName} 
                    <br></br>
                    Price: ${props.price}
                    <br></br>
                    Seller: {<Link to={`/profile/${props.sellerEmail}`} id="ind-list-link">{props.sellerName}</Link>}
                </div>
            )}
            
        </div>
    )
}

