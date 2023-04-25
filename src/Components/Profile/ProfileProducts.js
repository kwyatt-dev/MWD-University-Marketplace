import React, {useState, useEffect} from "react";
import {addNewListing, getProductListingsByEmail} from "../../Services/ProfileProductListingService";
import ProductListingsListItem from "./ProfileProductsItem";
import { useParams } from "react-router-dom";
import Parse from "parse/dist/parse.min.js";
import { useNavigate } from "react-router-dom";

//profileID = "testing";

// List of Profile's Products
const ProfileProducts = (props) => {
    
    const [profileProducts, setProfileProducts] = useState([]);

    const navigate = useNavigate();
  
    useEffect(() => {
      getProductListingsByEmail(props.email).then((productList) => {  
        setProfileProducts(productList);
        console.log("Number of Products: " + profileProducts.length);
    });
      
      
    }, [props.email, profileProducts.length]);

    // TODO: add Add Product Listing button
    const addListing = () => {
      navigate("/newListing");
    }
  
    return (
      <div>
        <div>
        {props.curUser && (
          <button onClick={addListing}>Add New Listing</button>
        )}
        </div>
        <div>
          {profileProducts.length > 0 && (
            <ul>
              {/*Passing listing info as props*/}
              {profileProducts.map((productListing) => (
                <li key={productListing.id}>
                  <ProductListingsListItem 
                    objectId={productListing.id}
                    productName={productListing.attributes.ProductName}
                    sellerEmail={productListing.attributes.SellerEmail}
                    sellerName={productListing.attributes.SellerName}
                    price={productListing.attributes.Price}
                    curUser={props.curUser}
                  />
                </li>
              ))}
            </ul>
          )}
          <hr />
        </div>
      </div>
    ); 



  };

export default ProfileProducts;