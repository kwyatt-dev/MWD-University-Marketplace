import React, {useState, useEffect} from "react";
import {getProductListingsByEmail} from "../../Services/ProfileProductListingService";
import ProductListingsListItem from "./ProfileProductsItem";
import { useParams } from "react-router-dom";
import Parse from "parse/dist/parse.min.js";

//profileID = "testing";

// List of Profile's Products
const ProfileProducts = (props) => {
    
    const [profileProducts, setProfileProducts] = useState([]);
  
    useEffect(() => {
      getProductListingsByEmail(props.email).then((productList) => {  
        setProfileProducts(productList);
    });
      
      
    }, [props.email]);
  
    return (
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
    ); 



  };

export default ProfileProducts;