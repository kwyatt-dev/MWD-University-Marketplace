import React, {useState, useEffect} from "react";
import {getProductListingsByProfile} from "../../Services/ProfileProductListingService";
import ProductListingsListItem from "./ProfileProductsItem";

//profileID = "testing";

// List of Profile's Products
const ProfileProducts = () => {
    return (
        <div>
            <h1>Inside Header</h1>
        </div>
    );
    /*
    const [profileProducts, setProfileProducts] = useState([]);
  
    useEffect(() => {
      getProductListingsByProfile().then((productList) => {  
      //getProductListingsByProfile(profileID).then((productList) => {
        setProfileProducts(productList);
      });
    }, []);
  
    return (
      <div>
        {profileProducts.length > 0 && (
          <ul>
            {/Passing listing info as props}
            {profileProducts.map((productListing) => (
              <li key={productListing.attributes.SellerEmail}>
                {<ProductListingsListItem 
                objectId={productListing.id}
                productName={productListing.attributes.ProductName}
                sellerEmail={productListing.attributes.SellerEmail}
                sellerName={productListing.attributes.SellerName}
                user={productListing.attributes.User}
                price={productListing.attributes.Price}
                />}
              </li>
            ))}
          </ul>
        )}
        <hr />
      </div>
    ); */



  };

export default ProfileProducts;