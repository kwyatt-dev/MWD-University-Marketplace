import React, { useEffect, useState } from "react";
import {getAllProductListings} from "../../Services/ProductListingService.js";
import ProductListingsListItem from "./ProductListingsListItem.js";

var postCheck = false;

const ProductListingsList = () => {
  const [productListings, setListings] = useState([]);

  if (!postCheck) {
    //createUser(1, "John", "Mayer", "jmayer@gmail.com", "wonderland");
    //postCheck = true;
  }

  useEffect(() => {
    getAllProductListings().then((productListings) => {
      setListings(productListings);
    });
  }, []);

  return (
    <div>
      This is the main list component.
      {productListings.length > 0 && (
        <ul>
          {/* Passing listing info as props */}
          {productListings.map((productListing) => (
            <li key={productListing.attributes.SellerEmail}>
              {<ProductListingsListItem 
              objectId={productListing.id}
              productName={productListing.attributes.ProductName}
              sellerName={productListing.attributes.SellerName}
              sellerEmail={productListing.attributes.SellerEmail}
              price={productListing.attributes.Price}
              />}
            </li>
          ))}
        </ul>
      )}
      <hr />
    </div>
  );
};

export default ProductListingsList;